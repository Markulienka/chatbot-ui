// import { useEffect, useState } from "react";

// interface CopyButtonProps {
//     onClick: () => void;
// }

// export default function CopyButton({ onClick }: CopyButtonProps) {
//     const [copied, setCopied] = useState(false);

//     useEffect(() => {
//         if (copied) {
//             const timer = setTimeout(() => setCopied(false), 2000);
//             return () => clearTimeout(timer);
//         }
//     }, [copied]);


//     const handleClick = () => {
//         onClick();      
//         setCopied(true);  
//     };

//     return (
//         <button
//             onClick={handleClick}
//             className="absolute top-2 right-2 text-xs bg-gray-800 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition"
//         >
//             {copied ? "Copied" : "Copy"}
//         </button>
//     );
// }


