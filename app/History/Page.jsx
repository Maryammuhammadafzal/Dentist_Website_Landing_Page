import React from "react";

const HistoryPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto">
      <div className="w-[90%] flex md:flex-row flex-col justify-center items-center gap-8 h-auto">
        <div className="left flex flex-col gap-4 ">
          <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-6xl max-xs:text-4xl text-5xl">
            <span className="text-black">Your</span>
            <span className="text-primary">First</span>
            <span className="text-black">Visit</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
