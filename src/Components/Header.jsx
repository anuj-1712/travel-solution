import React from "react";
import { IconContext } from "react-icons";
import { FaMountainSun } from "react-icons/fa6"

const Header = () => {
  return (
    <header className="h-[100px] sm:h-[150px] xl:h-[200px] w-full flex gap-2 sm:gap-6 items-center justify-center">
      <IconContext.Provider value={{className:"mountain-icon"}}>
        <FaMountainSun />
        <p className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl font-bold text-white">
          TRAVEL SOLUTION
        </p>
        <FaMountainSun />
      </IconContext.Provider>
    </header>
  );
};

export default Header;
