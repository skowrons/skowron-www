import Link from "next/link";
import { useState } from "react";

type link = {
  path: string;
  text: string;
};

const links: Array<link> = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "Über mich",
  },
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/projects",
    text: "Projekte & Erfahrungen",
  },
  {
    path: "/contact",
    text: "Kontakt",
  },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between h-16 md:mx-16 px-8 border-b-2 border-orange-500">
      {/* SMALL NAVBAR */}
      <div className="block md:hidden w-full">
        <div className="flex w-full justify-end">
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
        </div>
        <div
          className={
            "absolute top-14 w-full left-0 right-0 bg-white mt-2 rounded-bl-md rounded-br-md drop-shadow-xl z-10 " +
            (menuOpen ? "" : "hidden")
          }
        >
          {links.map((link) => (
            <Link
              className="block px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white"
              href={link.path}
              onClick={() => setMenuOpen(false)}
              key={link.path}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* LARGE NAVBAR */}
      <div className="w-full flex-grow md:flex md:items-center md:w-auto h-full text-sm hidden">
        {links.map((link) => (
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-orange-300 text-orange-500 mr-8"
            href={link.path}
            key={link.path}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
