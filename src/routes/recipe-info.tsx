import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function RecipeInfo() {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_RECIPE_API_KEY;

  const { recipeId } = useParams();

  const {
    isPending,
    isError,
    data: recipeInfo,
  } = useQuery({
    queryKey: ["recipeData"],
    queryFn: () =>
      fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
      ).then((res) => res.json()),
  });

  console.log({ recipeInfo });

  return (
    <div>
      This is the id: <div>{recipeId}</div>
      {/* <div>{recipeInfo}</div> */}
    </div>
  );
}
