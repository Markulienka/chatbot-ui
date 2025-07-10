// 'use client';

// import { signInWithGoogle } from '@/lib/actions/action';


// export default function OauthForm() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-2xl shadow-xl">
//       <form action={signInWithGoogle} className="w-full flex flex-col items-center gap-4">
//         <button
//           type="submit"
//           className="flex items-center justify-center gap-3 w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 border border-blue-700 rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//             <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//             <g id="SVGRepo_iconCarrier">
//               <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.75 0 9.547-4.031 9.547-9.719 0-.656-.07-1.148-.156-1.477z" fill="#4285F4"></path>
//               <path d="M3.152 7.345l3.281 2.406c.891-1.781 2.484-2.906 4.367-2.906 1.055 0 2.047.367 2.812 1.086l2.672-2.633c-1.484-1.367-3.375-2.148-5.484-2.148-3.672 0-6.75 2.477-7.844 5.844z" fill="#34A853"></path>
//               <path d="M12.8 21.844c2.484 0 4.547-.82 6.062-2.234l-2.797-2.289c-.789.547-1.797.867-3.266.867-2.523 0-4.664-1.703-5.438-4.008l-3.32 2.57c1.484 3.211 4.781 5.094 8.759 5.094z" fill="#FBBC05"></path>
//               <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.75 0 9.547-4.031 9.547-9.719 0-.656-.07-1.148-.156-1.477z" fill="#4285F4"></path>
//             </g>
//           </svg>
//           <span className="font-bold text-lg drop-shadow-md">Prihlásiť sa cez Google</span>
//         </button>
//       </form>
//     </div>
//   );
// }