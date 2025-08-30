import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import Avatar from "react-avatar";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setOpen,
  setSearchSuggestion,
  setSelectedTopic,
} from "../ReduxStore/slice";
import { search_Api_suggestion } from "../constant/youtube";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.sliceAction);
  const [input, setInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { searchSuggestion } = useSelector((store) => store.sliceAction);
  const { selectedTopic } = useSelector((store) => store.sliceAction);
  const searchVideo = () => {
    dispatch(setCategory(input));
  };

  const searchkeySuggestion = async () => {
    try {
      const res = await axios.get(search_Api_suggestion + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchkeySuggestion();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="w-full">
      <div className="flex p-1.5 px-5 items-center justify-between ">
        <div className="flex items-center gap-1.5">
          <div
            onClick={() => dispatch(setOpen(!open))}
            className="cursor-pointer"
          >
            <GiHamburgerMenu size={"22px"} />
          </div>
          <img
            className="px-2"
            width={"115px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/330px-YouTube_2024.svg.png"
            alt="youtube"
          />
        </div>
        <div className="flex items-center w-[40%] group ">
          <div className="w-[100%] group py-2 flex items-center justify-between px-2 border-1 border-gray-400 focus-within:outline-1 outline-blue-500 rounded-l-full ">
            <div className="text-gray-500 group-focus-within:hidden">
              <IoSearch size={"20px"} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-1 w-full bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  searchVideo();
                }
              }}
              onFocus={() => setShowSuggestion(true)}
            />
            {showSuggestion || searchSuggestion.length !== 0 && (
              <div
                onClick={() => setInput("")}
                className="hover:bg-gray-200 p-1 rounded-full"
              >
                <RxCross1 />
              </div>
            )}
          </div>
          <button
            type="button"
            className="py-2 px-3 border-1 border-l-0 rounded-r-full border-gray-400"
            onClick={searchVideo}
          >
            <IoSearch size={"24px"} />
          </button>
          {showSuggestion && searchSuggestion.length !== 0 && (
            <div className="absolute z-50 bg-gray-100 shadow-md w-[35%] top-14 rounded-md overflow-y-scroll scrollbar-hide p-1 ">
              <ul>
                {searchSuggestion.map((text, index) => (
                  <div key={index}>
                    <li
                      onClick={() => {
                        dispatch(setSelectedTopic(text));
                        setInput(text);
                        setShowSuggestion(false);
                        searchVideo();
                      }}
                      className="p-2 w-full hover:bg-gray-300 rounded-md cursor-pointer font-medium flex items-center gap-x-2"
                    >
                      <IoSearch size={"24px"} />
                      {text}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
          <div className="ml-5">
            <FaMicrophone size={"22px"} />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <IoIosNotifications size={"27px"} />
          <FaVideo size={"22px"} />
          <Avatar size="38" round={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
