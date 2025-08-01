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

const SideBar = () => {
  const sideBarMenuOne = [
    {
      icon: <FaHome />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscription",
    },
  ];
  const sideBarMenu2ndPart = [
    {
      icon: <GrHistory />,
      name: "History",
    },
    {
      icon: <MdOutlinePlaylistPlay />,
      name: "Playlist",
    },
    {
      icon: <BiSolidVideos />,
      name: "Your Videos",
    },
    {
      icon: <HiAcademicCap />,
      name: "Your Courses",
    },
    {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
    },
    {
      icon: <AiOutlineLike />,
      name: "Liked Videos",
    },
  ];

  const sideBarMenuThree = [
    {
      icon: <FaBagShopping />,
      name: "Shopping",
    },
    {
      icon: <IoMusicalNotes />,
      name: "Music",
    },
    {
      icon: <PiFilmSlateDuotone />,
      name: "Films",
    },
    {
      icon: <HiStatusOnline />,
      name: "Live",
    },
    {
      icon: <SiYoutubegaming />,
      name: "Gaming",
    },
    {
      icon: <LuNewspaper />,
      name: "News",
    },
    {
      icon: <IoTrophy />,
      name: "Sport",
    },
    {
      icon: <HiAcademicCap />,
      name: "Courses",
    },
    {
      icon: <GiHanger />,
      name: "Fashion&Beauty",
    },
    {
      icon: <MdPodcasts />,
      name: "Podcast",
    },
  ];

  const sideBarMenuFour = [
    {
      icon: <IoMdSettings />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag />,
      name: "Report history",
    },
    {
      icon: <HiOutlineQuestionMarkCircle />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback />,
      name: "Send Feedback",
    },
  ];

  const sideBarMenuFive = [
    {
      name: "About",
    },
    {
      name: "Press",
    },
    {
      name: "Copyright",
    },
    {
      name: "Contact us",
    },
    {
      name: "Creator",
    },
    {
      name: "Advertise",
    },
    {
      name: "Developer",
    },
  ];

  const {open} = useSelector((store) => store.sliceAction)

  return (
    <>
      <div className={`${open ? "w-0 overflow-hidden" : "w-[15%] cursor-pointer px-3 pt-1 pb-4 font-semibold " }, transition-all duration-300 overflow-y-auto`}>
        {/* 1st box */}
        <div className=" flex w-full flex-col justify-center">
          <div className="border-b border-b-gray-700 pb-1">
            {sideBarMenuOne.map((items, index) => (
              <div
                key={index}
                className="flex lg:gap-6 max-lg:justify-center items-center whitespace-nowrap hover:bg-gray-200 p-2 rounded-md ml-1"
              >
                <div className="text-xl">{items.icon}</div>
                <div className="lg:block hidden">
                  <span>{items.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-b-gray-700 py-1">
            <div className=" mt-2 flex max-lg:justify-center gap-2 items-center  whitespace-nowrap hover:bg-gray-200 p-2 rounded-md ml-1">
              <span>You</span>
              <RiArrowRightWideLine />
            </div>
            {sideBarMenu2ndPart.map((items, index) => (
              <div
                key={index}
                className="flex gap-6 items-center max-lg:justify-center  whitespace-nowrap hover:bg-gray-200 p-2 rounded-md ml-1"
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
              <div className="flex gap-6 items-center max-lg:justify-center  whitespace-nowrap hover:bg-gray-200 p-2 rounded-md ml-1">
                <div className="text-xl">{items.icon}</div>
                <div className="lg:block hidden">
                  <span>{items.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-b-gray-700 py-1">
            {sideBarMenuFour.map((items) => (
              <div className="flex gap-6 items-center max-lg:justify-center  whitespace-nowrap hover:bg-gray-200 p-2 rounded-md ml-1">
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
                <div className="flex flex-row items-center whitespace-nowrap hover:bg-gray-200 p-2 rounded-md ml-1">
                  <div className="max-lg:justify-center hover:text-red-200">
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
