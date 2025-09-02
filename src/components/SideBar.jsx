import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiArrowRightWideLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { HiStatusOnline } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { LuNewspaper } from "react-icons/lu";
import { IoTrophy } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinedFlag } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineFeedback } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const sideBarMenuOne = [
    {
      icon: <FaHome />,
      name: "Home",
      onClick: () => navigate("/"),
      disabled: false,
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
      disabled: true,
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscription",
      disabled: true,
    },
  ];
  const sideBarMenu2ndPart = [
    {
      icon: <GrHistory />,
      name: "History",
      disabled: true,
    },
    {
      icon: <MdOutlinePlaylistPlay />,
      name: "Playlist",
      disabled: true,
    },
    {
      icon: <BiSolidVideos />,
      name: "Your Videos",
      disabled: true,
    },
    {
      icon: <HiAcademicCap />,
      name: "Your Courses",
      disabled: true,
    },
    {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
      disabled: true,
    },
    {
      icon: <AiOutlineLike />,
      name: "Liked Videos",
      disabled: true,
    },
  ];

  const sideBarMenuThree = [
    {
      icon: <FaBagShopping />,
      name: "Shopping",
      disabled: true,
    },
    {
      icon: <IoMusicalNotes />,
      name: "Music",
      disabled: true,
    },
    {
      icon: <PiFilmSlateDuotone />,
      name: "Films",
      disabled: true,
    },
    {
      icon: <HiStatusOnline />,
      name: "Live",
      disabled: true,
    },
    {
      icon: <SiYoutubegaming />,
      name: "Gaming",
      disabled: true,
    },
    {
      icon: <LuNewspaper />,
      name: "News",
      disabled: true,
    },
    {
      icon: <IoTrophy />,
      name: "Sport",
      disabled: true,
    },
    {
      icon: <HiAcademicCap />,
      name: "Courses",
      disabled: true,
    },
    {
      icon: <GiHanger />,
      name: "Fashion&Beauty",
      disabled: true,
    },
    {
      icon: <MdPodcasts />,
      name: "Podcast",
      disabled: true,
    },
  ];

  const sideBarMenuFour = [
    {
      icon: <IoMdSettings />,
      name: "Settings",
      disabled: true,
    },
    {
      icon: <MdOutlinedFlag />,
      name: "Report history",
      disabled: true,
    },
    {
      icon: <HiOutlineQuestionMarkCircle />,
      name: "Help",
      disabled: true,
    },
    {
      icon: <MdOutlineFeedback />,
      name: "Send Feedback",
      disabled: true,
    },
  ];

  const sideBarMenuFive = [
    {
      name: "About",
      disabled: true,
    },
    {
      name: "Press",
      disabled: true,
    },
    {
      name: "Copyright",
      disabled: true,
    },
    {
      name: "Contact us",
      disabled: true,
    },
    {
      name: "Creator",
      disabled: true,
    },
    {
      name: "Advertise",
      disabled: true,
    },
    {
      name: "Developer",
      disabled: true,
    },
  ];

  const { open } = useSelector((store) => store.sliceAction);
  const { darkMode } = useSelector((store) => store.sliceAction);

  return (
    <>
      <div
        className={`${
          open ? "w-0 overflow-hidden" : "w-[15%] px-3 pt-1 pb-4 font-semibold "
        }, transition-all duration-300 overflow-y-auto`}
      >
        {/* 1st box */}
        <div className=" flex w-full flex-col justify-center">
          <div className="border-b border-b-gray-700 pb-1">
            {sideBarMenuOne.map((items, index) => (
              <div
                key={index}
                className={`flex lg:gap-6 max-lg:justify-center items-center whitespace-nowrap p-2 rounded-md ml-1
                ${
                  items.disabled
                    ? "cursor-not-allowed hover:text-gray-400"
                    : "cursor-pointer"
                } ${darkMode ? "hover:bg-[#1D4ED8]" : "hover:bg-gray-200"}`}
                onClick={items.onClick}
              >
                <div className="text-xl">{items.icon}</div>
                <div className="lg:block hidden">
                  <span>{items.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-b-gray-700 py-1">
            <div
              className={`mt-2 flex max-lg:justify-center gap-2 items-center  whitespace-nowrap hover:text-gray-400 p-2 rounded-md ml-1  cursor-not-allowed ${
                darkMode ? "hover:bg-[#1D4ED8]" : "hover:bg-gray-200"
              }`}
            >
              <span>You</span>
              <RiArrowRightWideLine />
            </div>
            {sideBarMenu2ndPart.map((items, index) => (
              <div
                key={index}
                className={`flex gap-6 items-center max-lg:justify-center  whitespace-nowrap p-2 rounded-md ml-1
                ${
                  items.disabled
                    ? "cursor-not-allowed hover:text-gray-400"
                    : "cursor-pointer"
                } ${darkMode ? "hover:bg-[#1D4ED8]" : "hover:bg-gray-200"}`}
              >
                <div className="text-xl">{items.icon}</div>
                <div className="lg:block hidden">
                  <span>{items.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-b-gray-700 py-1">
            {sideBarMenuThree.map((items) => (
              <div
                className={`flex gap-6 items-center max-lg:justify-center  whitespace-nowrap p-2 rounded-md ml-1
              ${
                items.disabled
                  ? "cursor-not-allowed hover:text-gray-400"
                  : "cursor-pointer"
              } ${darkMode ? "hover:bg-[#1D4ED8]" : "hover:bg-gray-200"}`}
              >
                <div className="text-xl">{items.icon}</div>
                <div className="lg:block hidden">
                  <span>{items.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-b-gray-700 py-1">
            {sideBarMenuFour.map((items) => (
              <div
                className={`flex gap-6 items-center max-lg:justify-center  whitespace-nowrap p-2 rounded-md ml-1
              ${
                items.disabled
                  ? "cursor-not-allowed hover:text-gray-400"
                  : "cursor-pointer"
              } ${darkMode ? "hover:bg-[#1D4ED8]" : "hover:bg-gray-200"}`}
              >
                <div className="text-xl">{items.icon}</div>
                <div className="lg:block hidden">
                  <span>{items.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col pt-2 justify-center gap-2 pb-10">
            <div className="w-[90%] flex flex-wrap">
              {sideBarMenuFive.map((items) => (
                <div
                  className={`flex flex-row items-center whitespace-nowrap p-2 rounded-md ml-1
                ${
                  items.disabled
                    ? "cursor-not-allowed hover:text-gray-400"
                    : "cursor-pointer"
                } ${darkMode ? "hover:bg-[#1D4ED8]" : "hover:bg-gray-200"}`}
                >
                  <div className="max-lg:justify-center">
                    <span>{items.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
