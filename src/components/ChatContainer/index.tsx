"use client";

import React from "react";
import { useChatHooks } from "@/hooks/useChatHooks";
import SearchBar from "../SearchBar";
import Heading from "../Heading";
import MessageList from "../MessageList";

export default function ChatContainer() {
  const { isLoading, input, messages, handleSubmit, handleChange } = useChatHooks();
  const hasNoMessages = messages.length === 0;

  return (
    <div
      className={`
        flex flex-col items-center px-4 gap-6 overflow-y-auto transition-all duration-700
        min-h-[100dvh] max-h-[100dvh] ${hasNoMessages ? 'justify-center pb-0' : 'justify-end pb-16'}
        w-full scrollbar-gutter-stable
      `}
    >
      {hasNoMessages && <Heading />}

      {!hasNoMessages && <MessageList messages={messages} />}

      <div className="w-full max-w-3xl mb-20">
        <SearchBar
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
