import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-center gap-10 p-4 ">
      <Link
        className="bg-black px-4 py-1 text-white rounded-lg w-40 text-center"
        href={"/"}
      >
        Latest
      </Link>
      <Link
        className="bg-black px-4 py-1 text-white rounded-lg w-40 text-center"
        href={"/"}
      >
        Top Rated
      </Link>
      <Link
        className="bg-black px-4 py-1  text-white rounded-lg w-40 text-center"
        href={"/"}
      >
        Most Viewed
      </Link>
    </div>
  );
}

export default Header;
