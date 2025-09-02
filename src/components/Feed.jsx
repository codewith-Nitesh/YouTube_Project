import React from "react";
import ButtonList from "./ButtonList";
import VideoComponent from "./VideoComponent";

const Feed = () => {
  return (
    <div>
      <div className="sticky top-0 ">
        <ButtonList />
      </div>
      <VideoComponent />
    </div>
  );
};

export default Feed;
