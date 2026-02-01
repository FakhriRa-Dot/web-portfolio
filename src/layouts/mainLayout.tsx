import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-7xl px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
