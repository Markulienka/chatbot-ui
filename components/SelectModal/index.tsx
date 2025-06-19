"use client";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface SelectModalProps {
  user: User | null;
}

export default function SelectModal({ user }: SelectModalProps) {
  const router = useRouter();

  if (user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">You're not logged in</h2>
        <p className="text-gray-600 mb-6">
          Would you like to log in or continue as a guest?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Log in
          </button>
          <button
            onClick={() => router.push("/guest")}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
          >
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
}