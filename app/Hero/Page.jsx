import { Button } from "@/components/ui/button";
import React from "react";
import HeroImage from "../../public/Hero-image.jpg";
import Image from "next/image";
import Header from "@/components/Header";
const HeroPage = () => {
  return (
    <div className="w-full h-screen flex relative justify-center items-center">
      <div className="header w-full h-[140px] absolute top-0 left-0">
        <Header />
      </div>
      <div className="flex md:flex-row justify-end items-center h-full w-full">
        <div className="h-full lg:w-[45%] w-[48%] max-md:pb-10 max-md:px-3 max-md:w-full flex justify-start max-md:justify-center  items-end">
          <div className="flex flex-col gap-6 py-5 h-auto">
            <h1 className="flex flex-col uppercase font-bold font-mono lg:leading-20 2xl:leading-24 lg:text-7xl md:text-6xl max-xs:text-4xl max-sm:text-5xl max-md:text-6xl 2xl:text-[90px]">
              <span className="text-primary">Your smile,</span>
              <span className="text-black">Our Passion</span>
            </h1>
            <p className="text-xl text-black pl-3 max-md:text-base max-md:max-w-xl max-xs:text-sm max-xs:pr-0 pr-13 font-normal">
              At WhiteStone, we are committed to providing exceptional dental
              care in a warm and welcoming environment. Located conveniently in
              [City/Region],
            </p>
            <div className="p-3">
              <Button className="bg-primary shadow-sm shadow-primary text-white h-12 rounded-xl px-6 text-lg max-sm:text-base max-xs:text-sm">
                Book An Appointment
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[50%] max-md:w-full max-md:absolute max-md:left-0 max-md:top-0 max-md:-z-10 h-full flex justify-end items-start">
          <div className="overlay max-md:block hidden w-full h-full  rounded-bl-[20%] bg-black/10 absolute top-0 left-0  z-10"></div>

          <Image
            src={HeroImage.src}
            alt="image"
            width={300}
            height={400}
            className="w-full h-full rounded-bl-[20%] object-center lg:object-bottom-right object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
