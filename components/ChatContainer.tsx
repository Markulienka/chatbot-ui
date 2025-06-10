"use client";

import React from "react";
import { useChatHooks } from "../hooks/useChatHooks";
import SearchBar from "./SearchBar";
import { CodeBlock } from "./CodeBlock";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ChatContainer() {
  const { isLoading, input, result, handleSubmit, handleChange } = useChatHooks();

  const cleanResult = typeof result === "string" ? result.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() : "";

  return (
    <div className="w-full flex flex-col items-center gap-20 py-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code({ inline, className, children, ...props }) {
            return <CodeBlock className={className} {...props}>{children}</CodeBlock>;
          },
        }}
      >
        {cleanResult}
      </ReactMarkdown>
      <SearchBar 
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}