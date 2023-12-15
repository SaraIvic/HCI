"use client";

import { FC } from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface FooterProps {
  pages: Page[];
}

interface Page {
  title: string;
  path: string;
}

const Footer: FC<FooterProps> = ({ pages }) => {
  const pathname = usePathname();
  return (
    <footer className="footer">
      <div className="footer-left">
        <Image
          className="footer-logo"
          src="/logo.png"
          width={140}
          height={98}
          alt="Footer logo"
        />
        <p className="paragraph">Changing Destinies,</p>
        <p className="paragraph">One Paw at a Time</p>
      </div>
      <div className="footer-center">
        <h2>SITEMAP</h2>
        <p id="darker" className="paragraph">
          Explore our pages
        </p>
        <ul className="footer-links">
          {pages.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className={clsx("footer-link", {
                  active: pathname === page.path,
                })}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-right">
        <h2>CONTACT US</h2>
        <div className="logo-text">
          <Image
            className="logo"
            src="/email-logo.png"
            width={30}
            height={30}
            alt="Email logo"
          />
          <p className="paragraph">info@sheltername.org</p>
        </div>
        <div className="logo-text">
          <Image
            className="logo"
            src="/phone-logo.png"
            width={30}
            height={30}
            alt="Phone logo"
          />
          <p className="paragraph">(555) 123-4567</p>
        </div>
        <p className="paragraph" id="bold">
          Mailing Address:
        </p>
        <p className="paragraph">
          Shelter Name Animal Rescue123 Caring WayCompassionville, CA 12345
        </p>
        <div className="logo-container">
          <Image
            className="logo"
            src="/facebook-logo.png"
            width={30}
            height={30}
            alt="Facebook logo"
          />
          <Image
            className="logo"
            src="/instagram-logo.png"
            width={30}
            height={30}
            alt="Instagram logo"
          />
          <Image
            className="logo"
            src="/twitter-logo.png"
            width={30}
            height={30}
            alt="Twitter logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
