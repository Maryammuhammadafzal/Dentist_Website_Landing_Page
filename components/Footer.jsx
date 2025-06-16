import React from "react";
import Vector from "../public/vector4.png";
const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-primary">
      <div className="object absolute top-0 right-0 w-full -z-10 h-full">
        <Image
          loading="lazy"
          src={Vector}
          alt="image"
          width={100}
          height={100}
          className="w-[360px] "
        />
      </div>
      <div className="w-full h-full flex justify-center bg-primary text-white items-center">
        <div className="w-[90%] py-20 h-auto flex flex-col gap-4 justify-center ">
          <div className="w-full h-auto flex flex-col gap-4 justify-center ">
            <div className="contact flex gap-3 ">
              <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-6xl max-xs:text-4xl text-5xl">
                Contact Us!
              </h2>
              <p className="max-w-lg">
                Ready to take the first step towards a healthier smile? Contact
                us today to schedule your appointment.
              </p>
            </div>
          </div>
          <div className="copyright flex justify-center items-center ">
            © 2021 all copyright reserved.{" "}
            <a href="" className="border-b border-white">
              Rootlet Solution{" "}
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
