"use client";
import Link from "next/link";
import Image from "next/image";
import { logo, themeIcon } from "@/app/assets/assets";
import { useState, useEffect } from "react";
import { navItems } from "../constants/data";
import { MdBrightness6 } from "react-icons/md";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menu, setMenu] = useState(false);
  const savedTheme = localStorage.getItem("theme") || null;
  const [theme, setTheme] = useState(savedTheme);

  // Set initial theme based on system preference or saved theme
  useEffect(() => {
    if (!savedTheme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [savedTheme]);

  // Apply theme changes
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  // Toggle theme
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //  hide and show nav
  useEffect(() => {
    if (typeof window === "undefined") return;
    function toggleNav() {
      const currentValue = window.scrollY;
      if (currentValue > lastScroll && currentValue > 100) {
        setIsVisible(false);
      } else if (currentValue < lastScroll) {
        setIsVisible(true);
      }
      setLastScroll(currentValue);
    }
    window.addEventListener("scroll", toggleNav);

    return () => removeEventListener("scroll", toggleNav);
  }, [lastScroll]);
  return (
    <header className={`${isVisible ? "showNav" : "hideNav"}`}>
      <nav className={`backdrop`}>
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={"navLogo"} />
          </Link>
        </div>
        <div className="navigationContainer">
          <ul className={"navlinks"}>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.path} className={"navlink"}>
                  {item.pathName}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={handleTheme}>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="themeIcon"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 6a6 6 0 106 6 6 6 0 00-6-6zm0 11V7a5 5 0 010 10zM12 23.5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM12 4.5a.5.5 0 01-.5-.5V1a.5.5 0 011 0v3a.5.5 0 01-.5.5zM23 12.5h-3a.5.5 0 010-1h3a.5.5 0 010 1zM4 12.5H1a.5.5 0 010-1h3a.5.5 0 010 1zM19.78 20.28a.51.51 0 01-.36-.15L17.3 18a.5.5 0 01.7-.7l2.12 2.12a.5.5 0 010 .71.49.49 0 01-.34.15zM6.34 6.84A.52.52 0 016 6.7L3.87 4.58a.5.5 0 11.71-.71L6.7 6a.51.51 0 010 .71.54.54 0 01-.36.13zM4.22 20.28a.49.49 0 01-.35-.15.5.5 0 010-.71L6 17.3a.5.5 0 11.7.7l-2.12 2.13a.51.51 0 01-.36.15zM17.66 6.84a.54.54 0 01-.36-.14.51.51 0 010-.71l2.12-2.12a.5.5 0 01.71.71L18 6.7a.52.52 0 01-.34.14z"
              ></path>
            </svg>
            {/* <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              // stroke-linecap="round"
              // stroke-linejoin="round"
              className="themeIcon"
              // height="1em"
              // width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 6a6 6 0 106 6 6 6 0 00-6-6zm0 11V7a5 5 0 010 10zM12 23.5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM12 4.5a.5.5 0 01-.5-.5V1a.5.5 0 011 0v3a.5.5 0 01-.5.5zM23 12.5h-3a.5.5 0 010-1h3a.5.5 0 010 1zM4 12.5H1a.5.5 0 010-1h3a.5.5 0 010 1zM19.78 20.28a.51.51 0 01-.36-.15L17.3 18a.5.5 0 01.7-.7l2.12 2.12a.5.5 0 010 .71.49.49 0 01-.34.15zM6.34 6.84A.52.52 0 016 6.7L3.87 4.58a.5.5 0 11.71-.71L6.7 6a.51.51 0 010 .71.54.54 0 01-.36.13zM4.22 20.28a.49.49 0 01-.35-.15.5.5 0 010-.71L6 17.3a.5.5 0 11.7.7l-2.12 2.13a.51.51 0 01-.36.15zM17.66 6.84a.54.54 0 01-.36-.14.51.51 0 010-.71l2.12-2.12a.5.5 0 01.71.71L18 6.7a.52.52 0 01-.34.14z"
              ></path>
            </svg> */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
