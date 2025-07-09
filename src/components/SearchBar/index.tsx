"use client";

import React, { ChangeEvent, FormEvent, useRef, useEffect } from "react";
import SendButton from "../SendButton";

interface SearchBarProps {
  input: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function SearchBar({ input, handleChange, handleSubmit, isLoading }: SearchBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxHeight = 200;

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const maxHeightOfTextarea = Math.min(textarea.scrollHeight, maxHeight);
      textarea.style.height = maxHeightOfTextarea + "px";
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  }

  return (
    <div className="w-full px-4 flex justify-center">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex gap-3"
      >
        <textarea
          ref={textareaRef}
          rows={2}
          value={input}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="Ask anything"
          className="resize-none flex-1 px-6 py-4 rounded-xl bg-[var(--muted)] text-[var(--foreground)] placeholder-gray-500 border border-gray-700 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 transition-all duration-200 text-lg"
        />
        
      <SendButton isLoading={isLoading}/>
      </form>
    </div>
  );
}