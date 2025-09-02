import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoComponent from "./components/VideoComponent";
import Body from "./components/Body";
import Feed from "./components/Feed";
import VideoDetail from "./components/videoDetail";
import { useSelector } from "react-redux";

 const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Body />
        </div>
      ),
      children: [
        {
          path: "/",
          element: (
            <div>
              <Feed/>
            </div>
          ),
        },
          {
          path: "/watch_youtube",
          element: (
            <div>
              <VideoDetail/>
            </div>
          ),
        },
      ],
    },
    {},
  ]);

function App() {

  const {darkMode} = useSelector((store) => store.sliceAction)

  return (
    <>
      <div className={`${darkMode ? "bg-[#111827] text-[#f9FAFB] " : "bg-[#F9FAFB] text-[#111827] "} w-screen h-screen overflow-hidden `}>
        <Navbar />
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
