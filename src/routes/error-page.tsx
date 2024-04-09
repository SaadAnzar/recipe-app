import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <h1 className="text-lg font-medium">
        Sorry, the page you are looking for is not available.
      </h1>
      <Link to="/" className={buttonVariants({ variant: "link" })}>
        Go to Home page
      </Link>
      <div>"★" : "☆"</div>
    </div>
  );
}
