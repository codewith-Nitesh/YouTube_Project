import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constant/youtube";
import VideoCart from "./VideoCart";
import { NavLink } from "react-router-dom";

const VideoComponent = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error, "no data");
    }
  };

  return (
    <div>
      <div className="m-1 mt-[60px] grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-2">
        {video.map((item) => (
          <NavLink to={`/watch_youtube?v=${item?.id}`} key={item.id}>
            <VideoCart item={item} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
