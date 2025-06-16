import Image from "next/image";
import React from "react";
import Vector from "../../public/vector.png";
const ServicesPage = () => {
        let service_data = [
                {
                        title:"Preventive Dentistry Details",
                        list: [
                                'Routine Cleanings & Exams',
                                'Digital X-Rays',
                                'Sealants & Fluoride Treatments',
                                'Oral Cancer Screenings'
                        ]
                },
                {
                        title:"Cosmetic Dentistry",
                        list: [
                                'Teeth Whitening',
                                'Porcelain Veneers',
                                'Smile Makeovers',
                                'Invisalign®'
                        ]
                },
                {
                        title:"Restorative Dentistry",
                        list: [
                                'Dental Crowns & Bridges',
                                'Tooth-Colored Fillings',
                                'Dentures & Partials',
                                'Dental Implants'
                        ]
                },
                {
                        title:"Emergency Dental Care",
                        list: [
                                'Immediate Pain Relief',
                                'Tooth Extractions',
                                'Treatment for Dental Injuries',
                        ]
                },
                {
                        title:"Specialized Services",
                        list: [
                                'Pediatric Dentistry',
                                'Periodontal Therapy',
                                'Root Canal Therapy',
                                'TMJ & Bite Disorders'
                        ]
                },
                {
                        title:"Orthodontics",
                        list: [
                                'Traditional Braces',
                                'Invisalign® Clear Aligners',
                                'Retainers & Post-Braces Care',
                        ]
                },

        ]

  return (
    <div className="w-full h-auto font-mono md:py-30 py-20 flex justify-center items-center relative">
      <div className="object absolute top-50 right-0 w-auto -z-10 h-auto">
        <Image loading="lazy" src={Vector} alt="img" width={100} height={100} className="w-[360px]" />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-auto flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-auto">
            <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-6xl max-xs:text-4xl text-5xl">
              <span className="text-primary">Our</span>
              <span className="text-black">Services</span>
            </h2>
            <p className="text-lg text-black  max-md:text-base max-w-lg text-center max-xs:text-sm font-normal">
              We offer a comprehensive range of dental services tailored to meet
              your unique needs:
            </p>
          </div>
          <div className="cards w-full h-auto flex flex-wrap justify-center items-center gap-6 lg:px-3 p-1 max-xs:px-3">
            {service_data && service_data.map((service , index) => (
                <div key={index} className="bg-white  rounded-lg hover:border hover:border-primary shadow-md max-xs:w-full shadow-primary/20 w-[370px] h-[235px] p-2 gap-3 flex flex-col justify-center items-start px-6">
              <h3 className="text-xl max-xs:text-lg text-primary font-semibold">
                {service.title}
              </h3>
              <ul className="flex flex-col gap-1 pl-6 list-disc text-black">
              {service?.list?.map((list , index)=>(
                  <li key={index} className="max-xs:text-sm">{list}</li>
              ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
