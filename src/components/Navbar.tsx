import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Bore Doom</div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#about" className="hover:text-purple-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </li>
      </ul>
      {/* Mobile menu button (optional for now) */}
    </nav>
  );
}
