import { Button } from "@/components/ui/button";
import React from "react";
import HeroImage from "../../public/Hero-image.jpg"
import Image from "next/image";
import Header from "@/components/Header";
const HeroPage = () => {
  return (
    <div className="w-full h-screen flex relative justify-center items-center">
        <div className="header w-full h-[140px] absolute top-0 left-0">
                <Header/>
        </div>
      <div className="flex md:flex-row justify-end items-center h-full w-full">
        <div className="h-full w-[45%] flex justify-start items-end">
          <div className="flex flex-col gap-6 py-5 h-auto">
            <h1 className="flex flex-col uppercase font-bold font-mono leading-24 text-[90px]">
              <span className="text-primary">Your smile,</span>
              <span className="text-black">Our Passion</span>
            </h1>
            <p className="text-xl text-black pl-3 pr-13 font-normal">
              At WhiteStone, we are committed to providing exceptional dental
              care in a warm and welcoming environment. Located conveniently in
              [City/Region],
            </p>
            <div className="p-3">
                <Button className="bg-primary shadow-sm shadow-primary text-white h-12 rounded-xl px-6 text-lg">Book An Appointment</Button>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-end items-start">
                <Image 
                src={HeroImage.src}
                width={300}
                height={400}
                className="w-full h-full rounded-bl-[20%] object-bottom-right object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
