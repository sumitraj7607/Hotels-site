import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", linkTo: "/" },
    { name: "Rooms", linkTo: "/Rooms" },
    { name: "About Us", linkTo: "/AboutUs" },
    { name: "Dining", linkTo: "/Dining" },
    { name: "Offers", linkTo: "/Offers" },
    { name: "Contact", linkTo: "/Contact" },
  ];

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-screen-xl mx-auto px-20 py-4 flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 px-2 py-1">
            <Link to="/">
              {" "}
              <img className="w-10 h-10 rounded-xl" src="Logo.svg"></img>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <Link key={item.name} to={item.linkTo} className="relative group">
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A7727D] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-gray-800">
            {navItems.map((item) => (
              <Link
                to={item.linkTo}
                key={item.name}
                className="relative group py-1"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1  bg-[#A7727D] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

//npm install lucide-react
