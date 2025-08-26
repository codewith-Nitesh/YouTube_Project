import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({item}) => {
  return (
    <div className="mt-1 w-full">
      <div className="flex items-center">
        <div>
          <Avatar size="38" round={true} />
        </div>
        <div className="flex items-center gap-2">
            <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
            <p className="ml-2 py-2 text-sm truncate">{item.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
