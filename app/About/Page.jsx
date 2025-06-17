import Image from "next/image";
import React from "react";
import Vector from "../../public/vector2.png";
import AboutImage from "../../public/Hero-image.jpg";
import Icon1 from "../../public/about-icon1.png"
import Icon2 from "../../public/about-icon2.png"
import Icon3 from "../../public/about-icon3.png"
import Icon4 from "../../public/about-icon4.png"

const AboutPage = () => {
  let about_data = [
    {
      title: "Experienced Team",
      description:
        "Our dentists and staff have years of experience and stay updated with the latest advancements in dental care.",
    },
    {
      title: "Patient Care",
      description:
        "Your health and comfort are our top priorities. We take the time to understand your concerns and create personalized treatment plans.",
    },
    {
      title: "Art Facility",
      description:
        "We use modern equipment and techniques to ensure the highest quality care.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We offer convenient appointment times to fit your busy lifestyle.",
    },
  ];
  return (
    <div className="flex w-full min-h-screen relative justify-center items-center">
        <div className="object absolute -bottom-14 left-0 w-auto -z-10 h-auto">
            <Image
              src={Vector}
              alt="image"
              width={100}
              height={100}
              className="w-[360px] "
            />
          </div>
      <div className="xl:w-[90%] w-full flex justify-center  items-center gap-4 h-full">
        <div className="w-[40%] py-10 h-full md:flex hidden justify-center items-center">
                <Image 
                src={AboutImage.src}
                height={300}
                alt="image"
                width={300}
                className="h-[600px] w-full rounded-br-[20%]"
                />
        </div>
        <div className="md:w-[60%] w-full h-auto font-mono flex justify-start items-center relative">
          
            <div className="w-auto flex flex-col gap-10 justify-center items-center">
              <div className="flex flex-col justify-center items-center h-auto">
                <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-5xl max-xs:text-4xl text-4xl">
                  <span className="text-black">Why</span>
                  <span className="text-primary">Choose</span>
                  <span className="text-black">Us</span>
                </h2>
                <p className="text-lg text-black max-lg:text-center  md:text-base max-w-lg max-xs:text-sm font-normal">
                  our team of highly skilled professionals is dedicated to
                  helping you achieve a healthy, beautiful smile.
                </p>
              </div>
              <div className="cards w-full h-auto flex flex-wrap justify-center items-center max-lg:px-3 gap-6 lg:px-3 p-1 max-xs:px-3">
                {about_data &&
                  about_data.map((about, index) => (
                    <div
                      key={index}
                      className="bg-white relative  rounded-lg hover:border hover:border-primary shadow-md max-xs:w-full shadow-primary/20 lg:w-[270px] lg:h-[200px] max-lg:w-full h-auto p-2 gap-3 flex flex-col justify-center items-start px-6"
                    >
                        <div className="icon bg-white h-8 w-12 lg:absolute lg:-top-4 flex justify-center items-center left-[40%]">
                                {
                                index === 0 && <Image 
                                 width={30} height={30} src={Icon1} alt="image" /> ||
                                index === 1 && <Image 
                                 width={30} height={30} src={Icon2} alt="image" /> ||
                                index === 2 && <Image 
                                 width={30} height={30} src={Icon3} alt="image" /> ||
                                index === 3 && <Image 
                                 width={30} height={30} src={Icon4} alt="image" /> 
                                }
                        </div>
                      <h3 className="text-xl max-xs:text-lg w-full py-2 text-center text-primary font-semibold">
                        {about.title}
                      </h3>
                     <p className="text-center text-base">{about.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default AboutPage;
