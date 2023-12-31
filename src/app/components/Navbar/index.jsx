import React from "react";
import Button from "../Button";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="header h-20 bg-[#FFF8F8] rounded-b-3xl">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
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
            <Button text={"Menu"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
