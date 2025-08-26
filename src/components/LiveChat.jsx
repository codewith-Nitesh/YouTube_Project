import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserMessage } from "../ReduxStore/chatSlice";
import { generateRandomMessage } from "../constant/helper";
import { generateRandomName } from "../constant/helper";

const LiveChat = () => {

  const { userMessage } = useSelector((store) => store.chatSlice);
  const dispatch = useDispatch()
  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(setUserMessage({name:generateRandomName(), message:generateRandomMessage(16)}))
    },1000)

      return (() => {
        clearInterval(timer)
      })
  },[])

  return (
    <>
      {userMessage.slice().reverse().map((item, index) => (
        <ChatMessage key={index} item={item}/>
      ))}
    </>
  );
};

export default LiveChat;
