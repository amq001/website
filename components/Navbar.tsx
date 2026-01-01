"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import footerLogo from "../public/footer-logo.svg";
import Button from "./Button";
import Container from "./Container";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed mx-2 md:mx-4 z-50 w-[calc(100%-16px)] md:w-[calc(100%-32px)] shadow:md transition-transform duration-300 ${
        isVisible ? "translate-y-0 my-4" : "-translate-y-full m-0"
      }`}
    >
      <Container
        className={`flex p-4 rounded-2xl backdrop-filter backdrop-blur-md bg-black/50 justify-between items-center w-full`}
      >
        <div className="position-relative w-24 h-6 md:w-32 md:h-8">
          <Image src={footerLogo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                ${
                  pathname === link.href
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-gray-100"
                }
                font-semibold
                ease-in-out
                duration-200
                `}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 md:gap-4">
          <Button variant="bordered">Book a Call</Button>
          <div className="md:hidden">
            <button
              className="flex items-center justify-center p-2 rounded-md border-none hover:text-gray-900 hover:bg-white hover:transition-all hover:duration-300 hover:ease-in-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <BiMenu
                  size={30}
                  color="#fff"
                  // className="text-white hover:text-black"
                  // onClick={() => setIsMobileMenuOpen(false)}
                />
              ) : (
                <BiX
                  size={30}
                  color="#fff"
                  // className="text-white hover:text-black"
                  // onClick={() => setIsMobileMenuOpen(true)}
                />
              )}
            </button>
          </div>
        </div>
      </Container>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          !isMobileMenuOpen
            ? "max-h-64 rounded-2xl mt-2 opacity-100 backdrop-filter backdrop-blur-md bg-black/50"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href
                  ? "text-[#f36f36e5]"
                  : "text-gray-300 hover:text-[#f36f36e5]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
