import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function RoutesLayout() {
  return (
    <>
      <Navbar />
      <main className="py-4 md:px-8 px-3">
        <Outlet />
      </main>
    </>
  );
}
