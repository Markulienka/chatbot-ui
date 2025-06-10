"use client";

import SendButton from "./SendButton";

export default function SearchBar({ input, handleChange, handleSubmit, isLoading }) {
  return (
    <div className="w-full px-4 flex justify-center">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="Ask anything..."
          className="flex-1 px-6 py-4 rounded-xl bg-[var(--muted)] text-[var(--foreground)] placeholder-gray-500 border border-gray-700 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 transition-all duration-200 text-lg"
        />
        
      <SendButton isLoading={isLoading}/>
      </form>
    </div>
  );
}