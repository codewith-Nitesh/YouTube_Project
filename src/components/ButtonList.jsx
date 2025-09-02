import React, { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../ReduxStore/slice";
const ButtonList = () => {
  const buttonList = [
    "All",
    "Javascript",
    "Java",
    "React",
    "Action",
    "Bollywood",
    "HollyWood",
    "Animation",
    "Gaming",
    "Web Development",
    "Python",
    "AIML",
    "BlockChain",
    "Science",
    "Animal Planet",
    "Africa",
    "Technology",
    "News",
    "Google",
    "Meta",
  ];

  const { open } = useSelector((store) => store.sliceAction);
  const [active, setActive] = useState(buttonList[0]);
  const dispatch = useDispatch();
  const { darkMode } = useSelector((store) => store.sliceAction);

  const setvideoCategory = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };

  console.log(active);

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy(-200, 0);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy(200, 0);
  };

  return (
    <div
      className={`flex overflow-y-hidden items-center gap-3 whitespace-nowrap p-2 z-20
      ${
        darkMode ? "bg-[#111827] text-[#f9FAFB]" : "bg-[#F9FAFB] text-[#111827]"
      } transition-all duration-250 buttonList relative`}
    >
      <button
        onClick={scrollLeft}
        className="bg-gray-500 cursor-pointer rounded-full p-1.5 absolute z-30 left-1 "
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 z-30 bg-gray-500 cursor-pointer rounded-full p-1.5 "
      >
        <FaAngleRight />
      </button>
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-scroll scrollbar-hide gap-3 scroll-smooth font-medium "
      >
        {buttonList.map((buttonList, index) => (
          <button
            onClick={() => setvideoCategory(buttonList)}
            key={index}
            className={`${
              active === buttonList
                ? darkMode
                  ? "bg-[#1D4ED8] text-white"
                  : "bg-[#374151] text-white"
                : darkMode
                ? "bg-[#374151] text-gray-200"
                : "bg-gray-300 text-black"
            } px-4 py-1 rounded-lg cursor-pointer whitespace-nowrap`}
          >
            <div>{buttonList}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
