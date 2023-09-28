import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Features from "../components/Features";
import CardSection from "../components/CardSection";
import Calltoaction from "../components/Calltoaction";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";
import BeforeFooter from "../components/BeforeFooter";

const Home = () => {
  const certIcon = [
    "https://abcaus.in/wp-content/uploads/2017/09/SEBI_logo.jpg",
    "https://abcaus.in/wp-content/uploads/2017/09/SEBI_logo.jpg",
    "https://abcaus.in/wp-content/uploads/2017/09/SEBI_logo.jpg",
  ];

  return (
    <div>
      <Navbar />
      <div className="flex min-[280px]:flex-col max-[639px]:flex-col sm:flex-col md:flex-col lg:flex-row min-[280px]:items-center max-[639px]:items-center sm:items-center md:items-center lg:items-start min-[280px]:flex-end max-[639px]:flex-end sm:flex-end md:flex-end lg:justify-center min-[280px]:w-[230%] max-[639px]:w-[190%] sm:w-[150%] lg:w-screen min-[200px]:relative min-[200px]:left-[120px] max-[270px]:relative max-[270px]:left-[120px] min-[280px]:relative min-[280px]:left-[120px] max-[320px]:relative max-[320px]:left-[120px] min-[330px]:relative min-[330px]:left-[150px] max-[450px]:relative max-[450px]:left-[200px] min-[451px]:relative min-[451px]:left-[200px] max-[550px]:relative max-[550px]:left-[200px] min-[551px]:relative min-[551px]:left-[250px] max-[639px]:relative max-[639px]:left-[250px] sm:relative sm:left-[200px] md:relative md:left-[200px] lg:relative lg:left-[0px] mt-8 px-10 py-10">

        <div className="flex flex-col w-64 mx-8 min-[280px]:w-[200vw] max-[639px]:w-[200vw] sm:w-[200vw] md:w-[200vw] lg:w-64 min-[280px]:items-center max-[639px]:items-center sm:items-center md:items-center lg:items-start">

          <span className="text-3xl mb-8 min-[280px]:text-7xl min-[639px]:text-7xl sm:text-7xl md:text-7xl lg:text-3xl min-[280px]:text-center max-[639px]:text-center sm:text-center md:text-center lg:text-left">
            Investing made
            <span className="text-green-800 font-bold underline">Easy</span> for
            you
          </span>
          <span className="text-sm text-gray-500 mb-8 min-[280px]:text-2xl max-[639px]:text-4xl lg:text-sm min-[280px]:text-center max-[639px]:text-center sm:text-center md:text-center lg:text-left">
            India's fastest growing investment platform with
            <span className="text-black font-bold">20+ Lac</span> users. We use
            edge-cutting technology to ensure that your personal information is
            fully encrypted and securely stored
          </span>
          <div className="bg-green-300 px-2 py-2 text-white w-48 text-center rounded-md min-[280px]:text-2xl lg:text-xl min-[280px]:text-center max-[639px]:text-center sm:text-center md:text-center lg:text-left">
            <Link to="/">Get Started Now</Link>
          </div>
        </div>

        <div className="min-w-fit mx-8 min-[280px]:hidden max-[639px]:hidden lg:flex">
          <img
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            width="400"
          />
        </div>
      </div>

      <div className="flex min-[280px]:flex-col max-[639px]:flex-col sm:flex-col md:flex-col lg:flex-row bg-gradient-to-t from-green-100 to-green-200 justify-around items-center mt-20 px-12 py-12">
        <div className="flex flex-col min-[280px]:items-center max-[639px]:items-center sm:items-center md:items-center lg:items-center min-[280px]:justify-center max-[639px]:justify-center sm:justify-center md:justify-center lg:justify-center text-black leading-3 min-[280px]:w-full max-[639px]:w-full sm:w-full md:w-full lg:w-64">
          <span className="text-3xl">Trusted by millions of people</span>{" "}
          <br />
          <span className="text-sm text-gray-500 my-8">
            We are registered as a distributor with AMFI, as an investment
            advisor with SEBI and platform partners with BSE
          </span>
        </div>
        <div className="flex min-[280px]:flex-col max-[639px]:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center">
          {certIcon.map((key, element) => (
            <img
              key={key}
              src={certIcon[element]}
              width="100"
              className="mx-4 my-4"
            />
          ))}
        </div>
      </div>
      <Features />
      <CardSection />
      <Calltoaction />
      <Section />
      <Testimonials />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default Home;
