import React, { useEffect, } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constant/youtube";
import VideoCart from "./VideoCart";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setYoutubeVideo } from "../ReduxStore/slice";

const VideoComponent = () => {
  const { video, category } = useSelector((store) => store.sliceAction);
  const dispatch = useDispatch();

  const fetchVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      dispatch(setYoutubeVideo(res?.data?.items))
    } catch (error) {
      console.log(error, "no data");
    }
  };

  const searchFetchVideo = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setYoutubeVideo(res?.data?.items));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchVideo();
    } else {
      searchFetchVideo();
    }
  }, [category]);

  return (
    <div>
      <div className="m-1 mt-[60px] grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-2">
        {video.map((item) => (
          <NavLink to={`/watch_youtube?v=${item?.id?.videoId || item?.id}`} key={item?.id?.videoId || item?.id}>
            <VideoCart item={item} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
