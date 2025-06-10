"use client"

import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import Heading from "../components/Heading";

export default function HomePage() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-gray-100 px-6 py-10">
      <div className="w-full max-w-5xl">
          <div className="flex items-center justify-center h-[30vh] mb-8">
            <Heading />
          </div>
        <ChatContainer />
      </div>
    </main>
  );
}