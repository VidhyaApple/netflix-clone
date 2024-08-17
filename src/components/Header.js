import React from "react";
import { header_logo } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black ">
      <img className=" w-1/6" src={header_logo} alt="Netflix logo" />
    </div>
  );
};

export default Header;
