"use client";

import Link from "next/link";
import { FC, useState } from "react";
import "./style.css";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Image
          className="nav-logo"
          src="/navbar-logo.png"
          width={114}
          height={80}
          alt="Navbar logo"
        />
        <div className="hambuger-menu-icon">
          <Hamburger rounded color="white" onToggle={handleShowNavbar} />
        </div>
        <ul className={`nav-elements  ${showNavbar && "active"}`}>
          {Object.entries(pages).map(([name, path]) => (
            <li key={name} onClick={handleShowNavbar}>
              <Link
                href={path}
                className={clsx("nav-link", { active: pathname === path })}
              >
                {name.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
