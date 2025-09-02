import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { API_KEY } from "../constant/youtube";
import { useSelector } from "react-redux";

const VideoCart = ({item}) => {
const [avatar, setAvatar]= useState("")
const {darkMode} = useSelector((store) => store.sliceAction)

  const fetchChannelAvatar = async () =>{
     try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet?.channelId}&key=${API_KEY}`)
      setAvatar(res.data?.items[0]?.snippet?.thumbnails?.high?.url)
     } catch (error) {
      console.log(error)
     }
  }

  useEffect(()=>{
    fetchChannelAvatar()
  },[])
  
  return (
    <>
      <div className={`w-full group p-1.5 h-[400px] overflow-hidden rounded-md  transition-all duration-100 ${darkMode ? "hover:bg-[#1D4ED8] bg-[#111827]" : "hover:bg-gray-200 bg-gray-50"}`}>
        <div className="w-full h-80 bg-black overflow-hidden rounded-md transition-all duration-150 group-hover:rounded-none">
          <img
            className="object-fill w-full h-full "
            src={item.snippet?.thumbnails?.medium?.url}
            alt="video"
          />
        </div>
        <div className="flex gap-2 mt-0.2 p-1 items-center">
          <div>
            <Avatar src={avatar} size="38" round={true} />
          </div>
          <div className="flex flex-col justify-center max-w-[90%]">
            <p className="truncate inline-block font-semibold">
              {item?.snippet?.title}
            </p>
            <span className={`${darkMode ? "text-white" : "text-gray-800"} font-light`}>{item.snippet?.channelTitle}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCart;
