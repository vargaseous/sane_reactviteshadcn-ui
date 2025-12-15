/*******************************************************************************
 * 
  Sane_____________________________________________________github.com/vargaseous

  navbar.tsx
  Navigation bar component. This is fixed on all pages.

*******************************************************************************/

"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle"; // depends on your setup
import { Menu } from "lucide-react"; // or use any other icon you prefer

type NavItem = {
  label: string;
  to: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/About" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Styling for navigation template */}
      <nav aria-label="Main navigation" className="w-full px-8 py-3 border-b border-t border-border fixed top-5 left-0 z-50 bg-background/70 backdrop-blur-md">
        {/* Overall container for the navbar */}
        <div className="flex items-center justify-between">
          {/* Left side of the navbar */}
          <div className="container flex items-center space-x-4">
            <Link
              to="/"
              className="md:text-lg lg:text-2xl font-semibold text-foreground"
            >
              Sane Template
            </Link>
          </div>

          {/* Right side of the navbar */}
          <div className="flex items-center space-x-4 md:space-x-12">
            {/* Navigation buttons - Desktop */}
            <div className="hidden md:flex space-x-6">
              {navItems.map(({ label, to, external }) => (
                <Link
                  key={label}
                  to={to}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Navigation buttons - Mobile */}
            <div className="md:hidden relative z-[1001]">
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                className="flex items-center justify-center hover:cursor-pointer transition-transform duration-200"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <Menu
                  className={`w-6 h-6 text-foreground transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-90 scale-110" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mode toggle button */}
            <ModeToggle />
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-0 z-40 px-8 pt-24 pb-12 bg-background/95 backdrop-blur-2xl border-t border-border animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-start mt-8 space-y-3 text-3xl text-left">
            {navItems.map(({ label, to, external }) => (
              <Link
                key={label}
                to={to}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={handleLinkClick}
                className="w-full py-2 text-left"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
