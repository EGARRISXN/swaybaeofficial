"use client";
import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useTheme, ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Ava from "../public/images/ava.jpg";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "myDark";

  const closeDropdownOnOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".dropdown")) {
      closeDropdown();
      setClickedOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);
    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const toggleDropdown = () => {
    setOpen(!isOpen);
    setClickedOutside(false);
  };

  const closeDropdown = () => {
    setOpen(false);
    setClickedOutside(false);
  };

  const handleLinkClick = () => {
    closeDropdown();
  };

  const toggleTheme = () => {
    setTheme(isDarkMode ? "myLight" : "myDark");
  };

  return (
    <div className="sticky top-1 z-[1] px-2 sm:px-8 md:px-14 lg:px-20 xl:px-24 2xl:px-32 3xl:px-42">
      <nav className="navbar h-4 px-3 py-3 bg-base-100 rounded-b-3xl  shadow-xl shadow-purple-800/50">
        <div className="navbar-start">
          <div className="flex h-9 w-9 mask mask-squircle">
            <Link href="/">
              <Image src={Ava} quality={100} alt="Ava" priority />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal md:text-xs md:space-x-0 lg:text-sm lg:space-x-0 xl:space-x-3 2xl-text-lg 2xl:space-x-5 3xl:text-xl 3xl:space-x-12">
            <li>
              <Link
                href="/about"
                className="bg-gradient-to-r from-secondary to-primary bg-clip-text hover:text-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/socials"
                className="bg-gradient-to-r from-secondary to-primary bg-clip-text hover:text-transparent "
              >
                Socials
              </Link>
            </li>
            <li>
              <Link
                href="/merch"
                className="bg-gradient-to-r from-secondary to-primary bg-clip-text hover:text-transparent "
              >
                Merch
              </Link>
            </li>
            <li>
              <Link
                href="/mediakit"
                className="bg-gradient-to-r from-secondary to-primary bg-clip-text hover:text-transparent "
              >
                Media Kit
              </Link>
            </li>
            <li>
              <Link
                href="/inquiries"
                className="bg-gradient-to-r from-secondary to-primary bg-clip-text hover:text-transparent "
              >
                Business Inquiries
              </Link>
            </li>
            <li>
              <Link
                href="/subathon"
                className="bg-gradient-to-r from-secondary to-primary bg-clip-text hover:text-transparent animate-pulse"
              >
                Subathon!
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown" style={{ position: "relative" }}>
          <button
            tabIndex={0}
            className="md:hidden"
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
            style={{
              paddingTop: "0.5rem",
            }}
          >
            <Hamburger size={24} toggled={!clickedOutside && isOpen} />
          </button>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm p-1 z-[1] w-40 bg-base-100 text-secondary rounded-b-2xl shadow-2xl shadow-purple-800/50"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  closeDropdown();
                }
              }}
              onBlur={() => {
                closeDropdown();
              }}
              style={{
                position: "absolute",
                top: "100%", // Place the dropdown below the button
                left: "50%", // Center horizontally within the parent container
                transform: "translateX(-50%)",
                minWidth: "100%", // Ensure the dropdown spans the width of the parent
              }}
            >
              <li>
                <Link
                  href="/subathon"
                  className="animate-pulse mx-auto"
                  onClick={handleLinkClick}
                >
                  Subathon!
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent mx-auto"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/socials"
                  className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent mx-auto"
                  onClick={handleLinkClick}
                >
                  Socials
                </Link>
              </li>
              <li>
                <Link
                  href="/merch"
                  className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent mx-auto"
                  onClick={handleLinkClick}
                >
                  Merch
                </Link>
              </li>
              <li>
                <Link
                  href="/mediakit"
                  className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent mx-auto"
                  onClick={handleLinkClick}
                >
                  Media Kit
                </Link>
              </li>
              <li>
                <Link
                  href="/inquiries"
                  className="bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent mx-auto"
                  onClick={handleLinkClick}
                >
                  Business Inquiries
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar-end">
          <label
            tabIndex={0}
            className={`swap swap-rotate btn-xs ${
              isDarkMode ? "myLight" : "myDark"
            }`}
          >
            <input type="checkbox" onChange={toggleTheme} />
            <svg
              className={`swap-on ${
                isDarkMode ? "myLight-fill" : "myDark-fill"
              } h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                fill="#b567ad"
              />
            </svg>
            <svg
              className={`swap-off ${
                isDarkMode ? "myLight-fill" : "myDark-fill"
              } h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                fill="#00ceff"
              />
            </svg>
          </label>
        </div>
      </nav>
    </div>
  );
};

const Navbar = () => (
  <ThemeProvider defaultTheme="mydark">
    <Nav />
  </ThemeProvider>
);

export default Navbar;
