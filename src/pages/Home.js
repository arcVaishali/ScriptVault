import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center mt-8">
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
        <div className="min-w-fit mx-8">
          <img
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            width="400"
          />
        </div>
      </div>
      
      <div className="flex flex-row bg-green-100 justify-around items-center mt-20 px-12 py-12">
        <div className="text-black leading-3 w-64">
          <span className="text-3xl mb-20">Trusted by millions of people</span> <br/>
          <span className="text-sm text-gray-500 my-8">
            We are registered as a distributor with AMFI, as an investment
            advisor with SEBI and platform partners with BSE
          </span>
        </div>
        <div className="flex flex-row justify-center items-center">
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" width="100" className="mx-4"/>
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" width="100" className="mx-4"/>
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" width="100" className="mx-4"/>
        </div>
      </div>
      <div className="flex flex-col px-8 py-8 justify-center items-center">
         <span className="text-gray-400 italic text-center">An award winning platform</span>
         <span className="text-3xl">Why <span className="text-green-800 font-bold underline">choose</span> investing with us?</span>
         <div className="flex flex-col justify-center items-center">
            
         </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
