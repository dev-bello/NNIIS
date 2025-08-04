import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/header-logo.jpg"
              alt="NNIIS 2025"
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About NNIIS
            </a>
            <a
              href="#sponsorship"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sponsorship
            </a>
            <a
              href="#exhibition"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Exhibition
            </a>
            <a
              href="#speakers"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Speakers
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="default">
              Register for Summit
            </Button>
            <Button variant="outline" size="default">
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About NNIIS
              </a>
              <a
                href="#sponsorship"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsorship
              </a>
              <a
                href="#exhibition"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Exhibition
              </a>
              <a
                href="#speakers"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="hero" size="default" className="w-full">
                Register for Summit
              </Button>
              <Button variant="outline" size="default" className="w-full">
                Log In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
