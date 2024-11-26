import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="w-5/5 h-20 mx-auto flex items-center justify-center border-5 bg-gray-600">
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Button 1
        </button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Button 2
        </button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Button 3
        </button>
      </div>
    </>
  );
};

export default NavBar;
