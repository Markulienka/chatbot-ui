'use client';

import { signInWithGoogle } from '@/lib/actions/action';

export default function OauthForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <form action={signInWithGoogle}>
        <button
          type="submit"
          className="w-full px-4 py-2 mb-3 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
}