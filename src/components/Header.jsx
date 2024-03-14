import { useLocation } from "react-router-dom";
import { useState } from "react";

import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";

import web_logo from "../assets/9391712.png";
import user_logo from "../assets/4984644.jpg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <div className="fixed top-0 left-0 z-100 py-2 w-full border-b border-zinc-600/80 lg:backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <a className="flex item-center w-[12rem] ml-4" href="">
          <img className="h-7 w-7 mr-2" src={web_logo} alt="logo" />
          <span className="text-xl text-white font-bold tracking-tight">
            BFFFamilk
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } hidden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex bg-black/95`}
        >
          {/* Replace hidden by flex */}
          <div className="relative z-2 hidden flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-medium text-2xl uppercase text-white transition-colors hover:text-cyan-500 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-5 py-5 md:py-4 lg:mr-0.25 lg:text-xs lg:font-bold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-white/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        
        {/* Replace hidden by flex */}
        <div className="hidden items-center text-white mr-4"> 
          <img
            className="mr-4 h-6 rounded-md"
            src={user_logo}
            alt="user_logo"
          />
          <button className="lg:hidden" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
