"use client";

import Link from "next/link";
import { FC } from "react";
import "./style.css";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathname = usePathname();
  return (
    //flex flex-col items-center justify-center p-14
    //flex gap-8
    <nav className="navbar">
      <Image
        className="nav-logo"
        src="/navbar-logo.png"
        width={114}
        height={80}
        alt="Navbar logo"
      />
      <ul className="link-container">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link
              href={path}
              className={clsx("nav-link", { active: pathname === path })}
            >
              {name.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
