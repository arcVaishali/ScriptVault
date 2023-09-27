import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col bg-gradient-to-t from-green-50 to-green-100 justify-center items-center px-20 py-20">
      <span className="text-sm text-gray-500 italic"> testimonials </span>
      <span className="text-3xl my-2">What clients say?</span>
      <span className="text-gray-600 text-sm my-2">
        We are registered as a distributor with AMFI, as an investment advisor
        with SEBI and platform partners with BSE
      </span>

      <div className="grid grid-cols-3 gap-4 my-4">

        <div className="flex flex-col justify-center items-center bg-green-50 px-8 py-8 border-x-2 border-solid border-green-50 rounded-[10px]">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" className="w-[128px] h-[128px] rounded-[64px] my-4"/>
            <span className="font-[1000] capitalize my-4">DIANNA KIMWEALTH</span>
            <span className="text-gray-500 my-4">Financial Analyst</span>

            <i class="ri-double-quotes-l text-6xl text-center text-green-300"></i>
            
            <span className="text-center">
                Commodo cupidatat elit elit qui mollit laborum commodo sunt reprehenderit cupidatat aute.
            </span>
        </div>

        <div className="flex flex-col justify-center items-center bg-green-50 px-8 py-8 border-x-2 border-solid border-green-50 rounded-[10px]">
            <img src="https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlJTIwcHJvZmlsZSUyMGdyZWVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" className="w-[128px] h-[128px] rounded-[64px] my-4"/>
            <span className="font-[1000] capitalize my-4">DIANNA KIMWEALTH</span>
            <span className="text-gray-500 my-4">Financial Analyst</span>

            <i class="ri-double-quotes-l text-6xl text-center text-green-300"></i>
            
            <span className="text-center">
                Commodo cupidatat elit elit qui mollit laborum commodo sunt reprehenderit cupidatat aute.
            </span>
        </div>


        <div className="flex flex-col justify-center items-center bg-green-50 px-8 py-8 border-x-2 border-solid border-green-50 rounded-[10px]">
            <img src="https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlJTIwcHJvZmlsZSUyMGdyZWVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" className="w-[128px] h-[128px] rounded-[64px] my-4"/>
            <span className="font-[1000] capitalize my-4">DIANNA KIMWEALTH</span>
            <span className="text-gray-500 my-4">Financial Analyst</span>

            <i class="ri-double-quotes-l text-6xl text-center text-green-300"></i>
            
            <span className="text-center">
                Commodo cupidatat elit elit qui mollit laborum commodo sunt reprehenderit cupidatat aute.
            </span>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
