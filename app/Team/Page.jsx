import Image from "next/image";
import React from "react";
import Vector from "../../public/vector3.png";
import TeamImage1 from "../../public/team-img1.jpg";
import TeamImage2 from "../../public/team-img2.jpg";
import TeamImage3 from "../../public/team-img3.jpg";
import TeamImage4 from "../../public/team-img4.jpg";

const TeamPage = () => {
  let team_data = [
    {
      image: TeamImage1,
      name: "Dr. Sarah Mitchell",
      profession: "BDS",
    },
    {
      image: TeamImage2,
      name: "Dr. James Carter",
      profession: "DMD",
    },
    {
      image: TeamImage3,
      name: "Dr. Emily Harper",
      profession: "RDH",
    },
    {
      image: TeamImage4,
      name: "Mark Thompson",
      profession: "Office Manager",
    },
  ];

  return (
    <div className="w-full h-auto font-mono md:py-30 py-20 flex justify-center items-center relative">
      <div className="object absolute top-50 right-0 sm:right-20 w-auto -z-10 h-auto">
        <Image src={Vector} alt="image" width={100} height={100} className="w-[450px]" />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-auto flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-auto">
            <h2 className="flex gap-3 uppercase font-bold text-center font-mono lg:leading-20 2xl:leading-24 md:text-6xl max-xs:text-4xl text-5xl">
              <span className="text-black">Meet Our</span>
              <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-black  max-md:text-base max-w-lg text-center max-xs:text-sm font-normal">
              Get to know the passionate professionals behind your care:
            </p>
          </div>
          <div className="cards w-full h-auto flex flex-wrap justify-center items-center p-1 gap-9 max-xs:px-3">
            {team_data &&
              team_data.map((team, index) => (
                <div
                  key={index}
                  className="flex flex-col h-auto w-auto gap-4 justify-center items-center"
                >
                  <div className="  rounded-xl hover:border-2 hover:border-primary max-xs:w-full  w-[270px] h-[330px] flex justify-center items-start ">
                    <Image
                      src={team.image}
                      className="object-cover object-top w-full h-full rounded-xl"
                      height={200}
                      alt="image" 
                      width={200}
                    />
                  </div>
                  <div className="w-auto flex flex-col justify-center items-center">
                    <h3 className="text-base leading-6 font-semibold text-primary">
                      {team.name}
                    </h3>
                    <p className="text-black text-sm font-medium">
                        {team.profession}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
