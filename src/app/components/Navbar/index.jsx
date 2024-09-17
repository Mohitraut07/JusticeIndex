"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <header className="h-20 bg-[#FFF8F8] md:rounded-b-3xl relative z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="header__logo">
            <Link href={"/"}>
              <Button text={"JusticeIndex"} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex space-x-6">
              <li>
                <Link href={"/pages/Record"}>
                  <Button text={"Records"} />
                </Link>
              </li>
              <li>
                <Link href={"/pages/Admin"}>
                  <Button text={"Admin"} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden">
            <Button
              text={isMenuOpen ? "Close" : "Menu"}
              func={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute w-full top-full bg-[#FFF8F8] rounded-b-3xl py-4 shadow-lg z-40 flex justify-center">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link href={"/pages/Record"}>
                  <Button text={"Records"} />
                </Link>
              </li>
              <li>
                <Link href={"/pages/Admin"}>
                  <Button text={"Admin"} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
