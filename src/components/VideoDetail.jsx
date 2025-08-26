import axios from "axios";
import React, { useState, useEffect, } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { API_KEY } from "../constant/youtube";
import Avatar from "react-avatar";
import { FaBell } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import { PiDotsThreeBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { IoMdSend } from "react-icons/io";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setUserMessage } from "../ReduxStore/chatSlice";

const VideoDetail = () => {
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const video_Id = searchParams.get("v");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  console.log("video id :", video_Id);

  const sendMessage = () => {
    dispatch(setUserMessage({ name: "Nitesh", message: message}));
    setMessage("");
  };

  useEffect(() => {
    fetch_Single_Data();
  }, []);

  const fetch_Single_Data = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_Id}&regionCode=IN&key=${API_KEY}`
      );
      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };


  console.log(singleVideo);

  return (
    <div className="px-12 pt-2 h-screen flex gap-8">
      <div className="h-[100vh] w-[60%]">
        <iframe
          className="w-full"
          height="500"
          src={`https://www.youtube.com/embed/${video_Id}?si=CjJhrAjEgBtW0gi9&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}
        </h1>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-3">
              <Avatar size={"40px"} round={true} className="cursor-pointer" />
              <div className="cursor-pointer">
                <span className="block">Abhishek Saini</span>
                <span>368k subscriber</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaBell className="text-xl" />
              Subscribed
              <RiArrowDownWideLine className="text-xl" />
            </div>
          </div>
          <div className="flex items-center p-2 gap-4  ">
            <div className="flex cursor-pointer items-center gap-2 bg-gray-300 p-2 px-3 rounded-full">
              <BiLike className="text-xl" />
              <span>1.9k</span>
              <BiDislike className="text-xl" />
            </div>
            <div className="flex items-center gap-1 bg-gray-300 p-2 px-3 rounded-full cursor-pointer">
              <IoIosShareAlt className="text-xl" />
              <span>share</span>
            </div>
            <div className="flex cursor-pointer items-center gap-1 bg-gray-300 p-2 px-3 rounded-full">
              <TfiDownload className="text-xl" />
              <span>Download</span>
            </div>
            <div className="flex cursor-pointer text-xl items-center gap-1 bg-gray-300 p-2 px-3 rounded-full">
              <PiDotsThreeBold />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[40%] p-0.5 ">
        <div className="border border-gray-200 rounded-sm p-1 ">
          <div className="flex items-center justify-between p-2 border-b-1 ">
            <div className="text-md flex items-center gap-1">
              Top Chats
              <SlArrowDown />
            </div>
            <div className="flex items-center gap-4 text-xl">
              <div className="hover:bg-gray-200 rounded-full p-1 duration-100 transition-all">
                <BsThreeDotsVertical />
              </div>
              <div className="hover:bg-gray-200 rounded-full p-1 duration-100 transition-all">
                <FiX />
              </div>
            </div>
          </div>
          <div className="h-[28rem] overflow-y-auto overflow-x-hidden scrollbar-hide p-1 flex flex-col-reverse">
            <LiveChat  />
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <div>
              <Avatar size={"40px"} round={true} className="cursor-pointer" />
            </div>
            <div className="border border-gray-200 focus-within:border-gray-400 p-1 rounded-sm w-full">
              <input
                type="text"
                placeholder="Send message..."
                className="outline-none w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
            </div>
            <div className="text-xl hover:bg-gray-200 rounded-full p-1 ">
              <IoMdSend size={"22px"} onClick={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
