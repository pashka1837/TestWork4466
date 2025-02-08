"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../Utils/links";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                href={link.href}
                aria-current={pathname === link.href ? "page" : "false"}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
