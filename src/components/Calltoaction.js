import React from "react";
import { Link } from "react-router-dom";

const Calltoaction = () => {
  return (
    <div className="flex flex-row justify-center items-center px-20 py-20">
      <div className="flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          className="rounded-[200px] w-[400px] h-[400px] mx-8"
        />
      </div>
      <div className="flex flex-col w-64 mx-8">
        <span className="text-3xl mb-8">
          Investing made{" "}
          <span className="text-green-800 font-bold underline">Easy</span> for
          you
        </span>
        <span className="text-sm text-gray-500 mb-8">
          India's fastest growing investment platform with{" "}
          <span className="text-black font-bold">20+ Lac</span> users. We use
          edge-cutting technology to ensure that your personal information is
          fully encrypted and securely stored
        </span>
        <div className="bg-green-300 px-2 py-2 text-white w-48 text-center rounded-md">
          <Link to="/">Get Started Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
