"use client"

import { signOut } from "@/lib/actions/action";

export default function LogOutButton() {
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
        title="Odhlásiť sa"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
        </svg>
        Log Out
      </button>
    </div>
  );
}