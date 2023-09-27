import React from 'react'
import {Link} from "react-router-dom"

const Section = () => {
  return (
    <div className="flex flex-col justify-center items-center px-12 py-12">
      <span className="text-3xl my-4">
        Be a <span className="text-green-700 font-bold underline">smart</span>{" "}
        Investor
      </span>
      <span className="text-gray-500 mx-8 my-4">
        We are registered as a distributor with AMFI, as an investment advisor
        with SEBI and platform partners with BSE
      </span>

      <div className="grid grid-cols-3 justify-center items-center my-12 border-2 border-solid border-green-50 px-4 py-4">
        <div className="flex flex-col justify-center items-center bg-white border-2 border-green-50 border-solid px-6 py-6 rounded-md">
          <span className="flex flex-col justify-center items-center font-semibold my-4">Pro Plan</span>
          <span className="flex flex-col justify-center items-center font-semibold text-4xl my-4">7$</span>
          <span className="flex flex-col justify-center items-center w-64 my-4">Per user, pay per month</span>
          <div className="bg-green-300 px-2 py-2 text-white w-32 text-center rounded-md my-4">
            <Link to="/">Go Pro</Link>
          </div>
          <div className="flex flex-col">
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Trade from web and app</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Expert advice</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Zero commission</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Expert advice </span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Trading Tools</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white border-2 border-green-50 border-solid px-6 py-6 rounded-md">
          <span className="flex flex-col justify-center items-center font-semibold my-4">Pro Plan</span>
          <span className="flex flex-col justify-center items-center font-semibold text-4xl my-4">7$</span>
          <span className="flex flex-col justify-center items-center w-64 my-4">Per user, pay per month</span>
          <div className="bg-green-300 px-2 py-2 text-white w-32 text-center rounded-md my-4">
            <Link to="/">Go Pro</Link>
          </div>
          <div className="flex flex-col">
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Trade from web and app</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Expert advice</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Zero commission</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Expert advice </span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Trading Tools</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white border-2 border-green-50 border-solid px-6 py-6 rounded-md">
          <span className="flex flex-col justify-center items-center font-semibold my-4">Pro Plan</span>
          <span className="flex flex-col justify-center items-center font-semibold text-4xl my-4">7$</span>
          <span className="flex flex-col justify-center items-center w-64 my-4">Per user, pay per month</span>
          <div className="bg-green-300 px-2 py-2 text-white w-32 text-center rounded-md my-4">
            <Link to="/">Go Pro</Link>
          </div>
          <div className="flex flex-col">
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Trade from web and app</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Expert advice</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Zero commission</span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Expert advice </span>
            <span className="my-2"><i className="ri-check-line text-green-600 mr-2"></i> Trading Tools</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section