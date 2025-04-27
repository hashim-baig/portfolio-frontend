import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import logo from "../assets/RoshanLogo.png";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="h-16 w-full items-center justify-between border-b border-gray-200 px-4 md:flex">
      <div className="w-[104px]">
      <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
      </div>
      <ul className="flex place-items-center space-x-4 rounded-full border border-gray-300 font-semibold px-4 py-2 hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-black font-bold"
                  : "text-sm text-gray-500 hover:text-black active:text-black"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <SocialLinks/>
    </nav>
  );
};


export default NavBar;
