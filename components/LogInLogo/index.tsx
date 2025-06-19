"use client"

import Link from "next/link";

export default function LogInLogo() {
  return (
    <div className="absolute top-4 right-4 z-50">
      <Link
        href="/login"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md"
      >
        Log in
      </Link>
    </div>
  );
}