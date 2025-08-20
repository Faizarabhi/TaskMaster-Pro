import React, { useState } from "react";
import ToggleMode from "../ToggleMode";
import LanguageSelect from "../LanguageSelect";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative bg-primary text-primary after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Burger */}
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close */}
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo & Menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src=""
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
            <ToggleMode />
            <LanguageSelect />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-2 pb-3 pt-2 space-y-1">
          <a
            href="#"
            className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/5 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/5 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/5 hover:text-white"
          >
            Calendar
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
