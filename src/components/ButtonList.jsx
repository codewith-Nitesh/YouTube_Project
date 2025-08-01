import React, { useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

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

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy(-200,0);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy(200,0);
  };

  return (
    <div className="flex overflow-y-hidden items-center overflow-x-hidden gap-3 whitespace-nowrap p-2 h-10 ">
      <button
        onClick={scrollLeft}
        className="bg-gray-500 cursor-pointer rounded-full p-2.5 absolute z-20 "
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={scrollRight}
        className="bg-gray-500 cursor-pointer rounded-full p-2.5 absolute z-20 right-1 "
      >
        <FaAngleRight />
      </button>
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-auto scrollbar-hide gap-3 scroll-smooth font-medium w-auto "
      >
        {buttonList.map((buttonList, index) => (
          <button
            key={index}
            className="bg-gray-300  focus:bg-gray-400  px-4 py-1 rounded-lg cursor-pointer"
          >
            <div>{buttonList}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
