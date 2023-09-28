import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navList=["Login" , "Signup"]
  return (
    <div className="bg-white flex flex-row justify-around min-[200px]:justify-between max-[639px]:justify-between sm:justify-between md:justify-between lg:justify-around sticky top:0 left:0 px-2 py-2 min-[200px]:border-b-[0px] max-[639px]:border-b-[0px] sm:border-b-[0px] md:border-b-[2px] md: border-gray-200 md:border-solid mb-20 min-[200px]:w-[300%] max-[639px]:w-[300%] sm:w-[200%] md:w-[200%] lg:w-[100%] inset-x-0 top-0 z-50">
      <img src="https://i.ibb.co/BGTKjCQ/Script-Vault.png" className="min-[280px]:w-128 max-[639px]:w-128 sm:w-[400px] md:w-[400px] lg:w-[200px]" />
      <div className="grid grid-cols-2 gap-1 min-[200px]:hidden max-[639px]:hidden sm:hidden lg:grid">
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
      <div className="grid grid-cols-2 gap-1 min-[200px]:grid max-[639px]:grid lg:hidden">
        <div className="flex flex-row justify-center items-center" onClick={()=>setMobileMenuOpen(true)}>
          <Bars3Icon className="min-[200px]:h-16 min-[200px]:w-16 max-[639px]:h-16 max-[639px]:w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-10 lg:w-10 text-gray" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
