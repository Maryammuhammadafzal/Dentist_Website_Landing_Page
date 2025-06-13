import React from "react";
import Logo from "../public/Logo.png";
import { Menu, MenuSquareIcon } from "lucide-react";
const Header = () => {
  let nav_data = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/service",
      name: "Services"
    },
    {
      link: "/about",
      name: "Why Choose Us",
    },
    {
      link: "/team",
      name: "Team",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];
  return (
    <header className="flex w-full font-mono h-full justify-center items-center py-5 px-3">
      <div className="flex justify-between items-center h-auto xl:w-[85%] lg:w-[95%] w-full">
        <a href="/" className="logo">
          <img src={Logo.src} alt="logo" className="w-auto h-auto" />
        </a>
        <nav className="w-auto h-auto flex justify-center items-center ">
          <ul className="w-auto md:flex gap-1 justify-center items-center hidden">
           {nav_data.map(({link , name},index)=> (
                 <li key={index} className="lg:p-2 p-[5px] flex justify-center items-center">
              <a href={link} className="text-black hover:text-primary font-medium active:text-primary focus:text-primary text-sm lg:text-lg">
                {name}
              </a>
            </li>
           ))}
          </ul>
          <div className="menu-button md:hidden block px-3">
<Menu/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
