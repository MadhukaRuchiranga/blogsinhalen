import React from "react";

function Navbar() {
  return (
    <div className="bg-sky-800 text-white flex justify-between p-2">
      <div className="">Blog-Sinhalen</div>
      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Categories</li>
          <li>Contact us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>Register</div>
    </div>
  );
}

export default Navbar;
