/*******************************************************************************
 * 
  Sanity___________________________________________________github.com/vargaseous

  Home.tsx
  Home page layout.

*******************************************************************************/

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <div className="flex flex-col items-left justify-center min-h-screen px-8 space-y-6 z-10">
        <h1 className="text-5xl lg:text-7xl font-bold font-sans mt-15 md:text-left">
          Sanity Template
        </h1>
        <p className="text-2xl lg:text-3xl font-sans md:text-left sm:text-center max-w-250 mb-10">
          an unopinionated starter kit for designers like me who want to create
          a modern React + Tailwind site but don't want to have to debug five
          fucking files just to figure out what the hell is colouring that
          button.
        </p>

        <Link to="/About" className="md:self-start">
          <Button variant="outline" className="cursor-pointer">
            Learn more
          </Button>
        </Link>
    </div>
  );
}
