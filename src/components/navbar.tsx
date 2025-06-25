/*******************************************************************************
 * 
  Sane_____________________________________________________github.com/vargaseous

  navbar.tsx
  Navigation bar component. This is fixed on all pages.

*******************************************************************************/

"use client";

import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle"; // depends on your setup
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // or use any other icon you prefer

export function Navbar() {
  return (
    // Styling for navigation template
    <nav aria-label="Main navigation" className="w-full px-8 py-3 border-b border-t border-border fixed top-5 left-0 z-10 bg-background/70 backdrop-blur-md">
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
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </div>

          {/* Navigation buttons - Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="flex items-center justify-center hover:cursor-pointer"
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-screen pt-20 z-100 px-8 bg-background/80 backdrop-blur-md 
                data-[state=open]:animate-in
                data-[state=open]:fade-in
                data-[state=open]:duration-700
                data-[state=open]:ease-out
                data-[state=closed]:animate-out
                data-[state=closed]:fade-out
                data-[state=closed]:duration-500
                data-[state=closed]:ease-in"
              >
                {/* Menu items */}
                <div className="flex flex-col space-y-2 mt-8">
                  <Link to="/" className="text-3xl">
                    Home
                  </Link>
                  <Link to="/About" className="text-3xl">
                    About
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mode toggle button */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
