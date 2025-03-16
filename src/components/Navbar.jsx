import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About Me", href: "#about" },
    { id: 3, text: "Services", href: "#services" },
    { id: 4, text: "Projects", href: "#projects" },
    { id: 5, text: "Testimonials", href: "#testimonials" },
    { id: 6, text: "Contact", href: "#contact" },
  ];

  const handleDownloadCV = () => {
    const cvUrl = "/CAHYA ADI SANJAYA.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CAHYA ADI SANJAYA.pdf";
    link.click();
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.style.boxShadow = "0 0 10px 0 rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="fixed w-full bg-white z-50 top-0 left-0">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-black/50">FAWZIUIUX</div>

          {/* Desktop Menu (Hanya untuk LG ke atas) */}
          <ul className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-[#FD6F00] transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
            <button
              onClick={handleDownloadCV}
              className="hover:cursor-pointer bg-[#FD6F00] text-white px-4 py-2 rounded-lg hover:bg-[#CC5900] transition-colors ml-4"
            >
              Download CV
            </button>
          </ul>

          {/* Hamburger Button (Tablet & Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Tablet & Mobile Menu */}
        <div
          className={`lg:hidden fixed top-16 right-0 w-full h-full bg-white/95 shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="mx-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <button
                onClick={handleDownloadCV}
                className="mt-4 bg-[#FD6F00] text-white px-4 py-2 rounded-lg hover:bg-[#CC5900] transition-colors"
              >
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
