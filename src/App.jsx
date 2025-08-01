import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoComponent from "./components/VideoComponent";
import Body from "./components/Body";

function App() {
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
              <VideoComponent />
            </div>
          ),
        },
      ],
    },
    {},
  ]);

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
