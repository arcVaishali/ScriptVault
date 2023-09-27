import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around px-2 py-2">
      <img src="https://i.ibb.co/Hgsfgc0/Script-Vault.png" width="150" />
      <div className="grid grid-cols-2 gap-1">
        <div className="grid justify-center items-center">
          <div className="bg-green-300 px-3 py-3 text-white rounded">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
        <div className="grid justify-center items-center">
          <div className="bg-black px-3 py-3 text-white rounded">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
