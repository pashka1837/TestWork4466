"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-sm  bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNav"
          aria-controls="myNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNav">
          <div className="navbar-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                className={`nav-link fs-4
                   ${pathname === link.href ? "active" : ""}`}
                href={link.href}
                aria-current={pathname === link.href ? "page" : "false"}
              >
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
