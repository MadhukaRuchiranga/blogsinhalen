import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between px-5 my-5  items-center">
      <Link href={"/"} className="">
        Blog-Sinhalen
      </Link>
      <div>
        <ul className="flex gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Categories</Link>
          <Link href={"/"}>Contact us</Link>
          <Link href={"/Aboutus"}>About Us</Link>
        </ul>
      </div>
      <div className="radiu bg-black text-white rounded-2xl px-2 py-0.5">
        Register
      </div>
    </div>
  );
}

export default Navbar;
