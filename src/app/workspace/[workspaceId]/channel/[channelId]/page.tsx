"use client";

import React from "react";
import Header from "./header";
import ChatInput from "./chat-input";

const ChannelIdPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Header title="General" />
      <div className="flex-1" />
      <ChatInput placeholder={`Message # General`} />
    </div>
  );
};

export default ChannelIdPage;
