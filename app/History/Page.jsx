import React from "react";
import HistoryImage from '../../public/history-image.png'
import Image from "next/image";
const HistoryPage = () => {
  let listData = [
    "Review your medical and dental history.",
    "Conduct a comprehensive oral examination.",
    "Discuss your dental goals and any concerns.",
    "Provide a detailed treatment plan tailored to your needs.",
  ];

  return (
    <div className="flex justify-center items-center w-full h-auto">
      <div className="w-[90%] flex md:flex-row flex-col justify-center items-center gap-8 h-auto">
        <div className="left md:w-[50%] w-full flex flex-col gap-4 ">
          <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-6xl max-xs:text-4xl text-5xl">
            <span className="text-black">Your</span>
            <span className="text-primary">First</span>
            <span className="text-black">Visit</span>
          </h2>
          <p className="xl:text-lg max-w-lg md:text-sm text-base">
            We understand that visiting the dentist can sometimes be daunting.
            That's why we go the extra mile to make your first visit as
            comfortable as possible. During your appointment, we will:
          </p>
          <ul className="flex flex-col gap-3 py-3">
            {listData &&
              listData.map((item, index) => (
                <li className="flex gap-2">
                  <span className="text-xl text-primary font-semibold">{index + 1}.</span>{" "}
                  <span className="text-black">{item}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="right md:w-[50%] w-full flex justify-center items-center">
          <Image
          src={HistoryImage.src}
          alt="image"
          width={200}
          height={200}
          className={`w-full object-cover  h-10/12`} />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
