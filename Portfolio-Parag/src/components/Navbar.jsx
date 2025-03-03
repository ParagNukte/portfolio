import { useState } from "react";
import { X, Menu } from "lucide-react";
// import "../assets/react.svg" as Logo;
function Navbar() {
  // import react.svg from assest in this file
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between items-center w-full space-x-2">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <img src="Logo.png" alt="" className="w-32 p-2" />
          </a>
          <nav className="md:flex hidden justify-end  items-end space-x-6 text-lg font-medium">
            <a
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Project
            </a>
           {/*  <a
              href="#test"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Testinomial
            </a> */}
            <a
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main Menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 " aria-hidden="true"></X>
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true"></Menu>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Project
            </a>
           {/*  <a
              href="#test"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Testinomial
            </a> */}
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
