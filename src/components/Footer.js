import React from "react";

const Footer = () => {
  const credList = ["email@gmail.com", "+91 7890336778", "+91 700006000"];
  const sList = ["facebook", "instagram", "twitter"];
  const socialsList = ["https://www.facebook.com/", "https://www.instagram.com/", "https://www.twitter.com/"];
  return (
    <div className="bg-black flex flex-row justify-between items-center px-20 py-10">
      <div className="flex flex-col">
        <span className="text-white my-8">
          Investment Company based in India
        </span>
        <div className="flex flex-row">
          {credList.map((key, element) => (
            <span key={key} className="text-white mr-4">
               {credList[element]} 
            </span>
          ))}
        </div>

        <span className="text-white my-4">New Delhi | India</span>
        <span className="my-12 text-gray-500">Copyright 2023 All Rights Reserved</span>
      </div> 
      <div className="flex flex-row">
        {
            socialsList.map((key , element) => (
                <span><a className="text-white underline mx-4" key={key} href={socialsList[element]}>{sList[element]}</a></span>
            ))
        }
      </div>
    </div>
  );
};

export default Footer;
