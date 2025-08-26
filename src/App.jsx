import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoComponent from "./components/VideoComponent";
import Body from "./components/Body";
import Feed from "./components/Feed";
import VideoDetail from "./components/videoDetail";

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

  return (
    <>
      <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden ">
        <Navbar />
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
