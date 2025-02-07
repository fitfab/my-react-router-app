import React from "react";
import { Outlet, Link } from "react-router";
import Logo from "./components/logo";

const AppLayout: React.FC = () => {
  const date = new Date();

  return (
    <div className="w-96 h-dvh md:w-192 lg:w-384 lg:h-4/5 bg-blend-luminosity ">
      <header className="relative">
        <Logo className="absolute -bottom-8" />
        <nav className="space-x-4 text-1xl flex flex-row place-content-end font-black uppercase text-gray-800">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="p-4 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 h-full">
        <Outlet />
      </main>
      <footer className="text-gray-400 font-extralight text-xs">
        <p>&copy; {date.getFullYear()} Miguel Julio</p>
      </footer>
    </div>
  );
};

export default AppLayout;
