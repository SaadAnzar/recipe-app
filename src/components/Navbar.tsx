import { Link, NavLink, NavLinkProps, useMatch } from "react-router-dom";
import { Cherry, Heart, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <NavLink to="/" className="flex items-center space-x-2">
            <Cherry className="size-6" />
            <span className="inline-block font-bold">Wobot Recipe</span>
          </NavLink>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="grid grid-flow-col auto-cols-max items-center gap-x-4">
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${
                  isActive && "pointer-events-none opacity-80"
                }`
              }
            >
              Favourites
              <Heart className="size-5 ml-2" />
            </NavLink>
            <SignedOut>
              <Link
                to="/sign-in"
                className={buttonVariants({ variant: "secondary" })}
              >
                Sign In
                <LogIn className="size-4 ml-2" />
              </Link>
              {/* <Link to="/sign-up" className={buttonVariants()}>
                Register
              </Link> */}
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
