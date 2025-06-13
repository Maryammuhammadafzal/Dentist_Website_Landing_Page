import React from "react";
import Marquee from "react-fast-marquee";
const TestimonialPage = () => {
  let testimonial_data = [
    {
      name: "- Emily R.",
      description:
        '"The team at WhiteStone is fantastic! They made me feel at ease from the moment I walked in."',
    },
    {
      name: "- Mark T.",
      description:
        '"Thanks to Dr. Mitchell, I have the confidence to smile again! Highly recommend."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: "- Emily R.",
      description:
        '"The team at WhiteStone is fantastic! They made me feel at ease from the moment I walked in."',
    },
    {
      name: "- Mark T.",
      description:
        '"Thanks to Dr. Mitchell, I have the confidence to smile again! Highly recommend."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: "- Emily R.",
      description:
        '"The team at WhiteStone is fantastic! They made me feel at ease from the moment I walked in."',
    },
    {
      name: "- Mark T.",
      description:
        '"Thanks to Dr. Mitchell, I have the confidence to smile again! Highly recommend."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: "- Emily R.",
      description:
        '"The team at WhiteStone is fantastic! They made me feel at ease from the moment I walked in."',
    },
    {
      name: "- Mark T.",
      description:
        '"Thanks to Dr. Mitchell, I have the confidence to smile again! Highly recommend."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
    {
      name: " - Susan",
      description:
        '"WhiteStone transformed my smile! The staff is friendly and professional. I couldn’t be happier."',
    },
  ];

  return (
    <div className="w-full h-auto font-mono md:py-30 py-20 flex justify-center items-center relative">
      <div className="w-auto flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center h-auto">
          <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-6xl max-xs:text-4xl text-5xl">
            <span className="text-black">Patient</span>
            <span className="text-primary">Testimonial</span>
          </h2>
          <p className="text-lg text-black  max-md:text-base max-w-lg text-center max-xs:text-sm font-normal">
            Hear from our satisfied patients:
          </p>
        </div>
        <div className="testimonial overflow-hidden slider py-4  w-full h-auto flex flex-col justify-start  items-start">
          <Marquee speed={20} pauseOnHover={true} gradient={false} autoFill={true} className="flex w-auto py-4 h-auto justify-start gap-5">
            {testimonial_data &&
              testimonial_data.map((testimonial, index) => (
                <div
                  key={index}
                   className={`${index % 2 === 0 ? 'bg-primary text-white' : 'bg-white text-black'} mx-3 shadow-md shadow-primary/30  rounded-lg w-[300px] h-[155px] gap-3 flex flex-col justify-center items-center px-2`}
                > 
                  <p className="w-auto h-auto text-center text-sm">{testimonial.description}</p>
                  <h3 className={`${index % 2 === 0 ? 'text-white' : 'text-primary'} text-base max-xs:text-lg  font-semibold`}>
                    {testimonial.name}
                  </h3>
                </div>
              ))}
          </Marquee>
          <Marquee speed={20} pauseOnHover={true} delay={6} gradient={false} autoFill={true} className=" flex w-auto py-4 h-auto justify-start gap-5">
            {testimonial_data &&
              testimonial_data.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-primary text-white' : 'bg-white text-black'} mx-3 shadow-md shadow-primary/30  rounded-lg w-[300px] h-[155px] gap-3 flex flex-col justify-center items-center px-2`}
                >       
                  <p className="w-auto h-auto text-center text-sm">{testimonial.description}</p>
                  <h3 className={`${index % 2 === 0 ? 'text-white' : 'text-primary'} text-base max-xs:text-lg  font-semibold`}>
                    {testimonial.name}
                  </h3>
                </div>
              ))}
          </Marquee>
          
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
