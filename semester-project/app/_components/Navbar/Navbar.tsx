"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";

interface NavbarProps {
  pages: Page[];
}

interface Page {
  title: string;
  path: string;
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const hideNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href={"/"}>
          <Image
            className="nav-logo"
            src="/logo.png"
            width={93}
            height={65}
            alt="Navbar logo"
          />
        </Link>
        <div className="hambuger-menu-icon">
          <Hamburger
            rounded
            color="#f4fcfc"
            duration={0.6}
            toggled={showNavbar}
            onToggle={handleShowNavbar}
            aria-label={
              showNavbar ? "Close Navigation Menu" : "Open Navigation Menu"
            }
          />
        </div>
        <ul className={`nav-elements  ${showNavbar && "active"}`}>
          {pages.map((page) => (
            <li key={page.path} onClick={hideNavbar}>
              <Link
                href={page.path}
                className={clsx("nav-link", { active: pathname === page.path })}
              >
                {page.title.toLocaleUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
