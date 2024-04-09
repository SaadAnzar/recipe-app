import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./components/Loader";

function IndexPage() {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_RECIPE_API_KEY;

  const [input, setInput] = useState<string>("avocado");

  const queryClient = useQueryClient();

  const {
    isPending,
    isError,
    data: recipes,
  } = useQuery({
    queryKey: ["recipeData"],
    queryFn: () =>
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${input}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["recipeData"] });
  }, [input]);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search Recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {isPending && <Loader />}
      {isError && <span>Error...</span>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {recipes &&
          recipes.results &&
          recipes.results?.length > 0 &&
          recipes.results?.map((recipe: any) => (
            <Card key={recipe.id}>
              <CardHeader>
                <CardTitle className="text-xl">{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={recipe.image} className="size-fit rounded-xl" />
              </CardContent>
              <CardFooter className="relative bottom-3">
                <Link to={`/recipe/${recipe.id}`}>View more</Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default IndexPage;
