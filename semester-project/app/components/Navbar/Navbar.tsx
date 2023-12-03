import Link from "next/link";
import { FC } from "react";
import "./style.css";
import Image from "next/image";

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  return (
    //flex flex-col items-center justify-center p-14
    //flex gap-8
    <nav className="navbar">
      <Image src="/navbar-logo.png" width={114} height={80} alt="Navbar logo" />
      <ul className="link-container">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link href={path}>{name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
