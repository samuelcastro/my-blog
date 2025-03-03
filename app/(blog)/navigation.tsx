"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-slate-100 py-4 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors duration-300"
        >
          Sam Silva
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-6 mr-6">
            <NavLink href="/" isActive={pathname === "/" || pathname === ""}>
              Home
            </NavLink>
            <NavLink
              href="/experience"
              isActive={pathname.includes("/experience")}
            >
              Experience
            </NavLink>
            <NavLink href="/about" isActive={pathname.includes("/about")}>
              About Me
            </NavLink>
          </div>

          <a
            href="https://calendly.com/samsilvas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="container mx-auto px-5 flex flex-col space-y-4">
          <NavLink href="/" isActive={pathname === "/" || pathname === ""}>
            Home
          </NavLink>
          <NavLink
            href="/experience"
            isActive={pathname.includes("/experience")}
          >
            Experience
          </NavLink>
          <NavLink href="/about" isActive={pathname.includes("/about")}>
            About Me
          </NavLink>

          <div className="pt-2">
            <a
              href="https://calendly.com/samsilvas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative font-medium transition-colors duration-300 ${
        isActive
          ? "text-blue-600 font-semibold"
          : "text-slate-700 hover:text-blue-600"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
      )}
    </Link>
  );
}
