import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

import { NavLink } from "react-router-dom";

import SocialLinks from "./SocialLinks";

import logo from "../assets/RoshanLogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
];

const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY - lastScrollY > 10) {
          // scrolled down 10px
          setShowNavbar(false);
        } else if (lastScrollY - window.scrollY > 10) {
          // scrolled up 10px
          setShowNavbar(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      className={`bg-white px-4 sm:px-6 md:px-10 lg:px-10 xxl:px-20 2xl:px-100 py-1
        transition-transform duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <Toolbar className="justify-between px-0 sm:px-3">
        {/* {logo} */}
        <div className="w-auto">
          <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
        </div>

        {isMobile ? (
          <IconButton edge="end" onClick={toggleDrawer(true)}>
            <div className="border-1 rounded-xl py-1 px-2">
              <MenuIcon />
            </div>
          </IconButton>
        ) : (
          <>
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
            <SocialLinks />
          </>
        )}

        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div className="w-full h-[100vh] max-w-full p-4 box-border">
            {/* Header: Logo and Close */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto rounded-full"
                />
              </div>
              <div className="border-1 rounded-full">
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>

            {/* Drawer Content */}

            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name} className="py-4">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-2xl text-black font-semibold"
                        : "text-2xl  text-gray-600 hover:text-black active:text-black"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
