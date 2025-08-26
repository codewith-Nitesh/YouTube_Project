import React, { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

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

  const {open} = useSelector((store) => store.sliceAction)
  const [active,setActive] = useState(buttonList[0])

  const setvideoCategory = (tag) =>{
    if(active !== tag){
      setActive(tag)
    }
  }

  console.log(active)

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy(-200,0);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy(200,0);
  };

  return (
    <div className={`${open ? "flex fixed top-13 -left-1 right-0 bg-[#F6F8FC] overflow-y-hidden items-center gap-3 whitespace-nowrap p-2 h-12 w-[98.8%] z-20" : "flex fixed top-13 left-74 right-0 bg-[#F6F8FC] overflow-y-hidden items-center gap-3 whitespace-nowrap p-2 h-12 w-[83.5%] z-20"}, transition-all duration-250`}>
      <button
        onClick={scrollLeft}
        className="bg-gray-500 cursor-pointer rounded-full p-1.5 absolute z-30 left-0 "
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
          onClick={()=>setvideoCategory(buttonList)}
            key={index}
            className={`${active === buttonList ? "bg-gray-800 text-white " : ""} bg-gray-300 px-4 py-1 rounded-lg cursor-pointer`}
          >
            <div>{buttonList}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
