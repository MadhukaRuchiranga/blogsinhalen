import React from "react";

function SearchBar() {
  return (
    <div className="flex gap-8 items-center justify-center mt-40  border py-4 border-black  w-100 mx-auto rounded-full m-center align-center">
      <div>
        <input
          type="text"
          placeholder="Enter here..."
          className="w-full  outline-none"
        />
      </div>
      <div>
        <button className="bg-black text-white rounded-full px-5 py-1">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
