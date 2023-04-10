import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between h-16 md:mx-16 px-8 border-b-2 border-orange-500">
      {/* SMALL NAVBAR */}
      <div className="block md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center px-3 py-2 border-2 rounded text-orange-500 border-orange-500 hover:text-orange-300"
        >
          <svg
            className="fill-current h-3 w-3 stroke-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div
          className={
            "absolute top-14 w-full left-0 right-0 bg-white mt-2 rounded-bl-md rounded-br-md drop-shadow-xl z-10 " +
            (menuOpen ? "" : "hidden")
          }
        >
          <Link
            className="block px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white"
            href={"/"}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white"
            href={"/about"}
            onClick={() => setMenuOpen(false)}
          >
            Über mich
          </Link>
          <Link
            className="block px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white"
            href={"/blog"}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            className="block px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white"
            href={"/projects"}
            onClick={() => setMenuOpen(false)}
          >
            Projekte / Erfahrungen
          </Link>
        </div>
      </div>

      {/* LARGE NAVBAR */}
      <div className="w-full flex-grow md:flex md:items-center md:w-auto h-full text-sm hidden">
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-300 text-orange-500 mr-8"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-300 text-orange-500 mr-8"
          href={"/about"}
        >
          Über mich
        </Link>
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-300 text-orange-500 mr-8"
          href={"/blog"}
        >
          Blog
        </Link>
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-300 text-orange-500 mr-8"
          href={"/projects"}
        >
          Projekte / Erfahrungen
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
