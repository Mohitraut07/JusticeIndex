"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  console.log(isMenuOpen);
  return (
    <>
      <div className="header h-20 bg-[#FFF8F8] rounded-b-3xl relative">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
    {
      isMenuOpen && (
        <div className="header__menu h-50 w-[85%] rounded-b-3xl  justify-center flex sm:hidden absolute left-10 mt-90 bg-gray-400 top-20 ">
        
        <ul className="flex-col top-5">
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
      )
    }
          <div className="header__logo">
            <Link href={"/"}>
              <Button text={"JusticeIndex"} />
            </Link>
          </div>
          <div className="header__menu hidden sm:block">
            <ul className="flex space-x-4">
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
          <div className="header__menu sm:hidden">
            <Button
              text={"Menu"}
              func={() => setIsMenuOpen(!isMenuOpen)}
                            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
