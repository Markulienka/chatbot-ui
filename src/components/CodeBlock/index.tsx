// import { ReactNode, useRef } from "react";
// import CopyButton from "../CopyButton";

// interface CodeBlockProps {
//   className?: string;
//   children: ReactNode;
//   [key: string]: any
// }

// export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
//   const codeRef = useRef<HTMLElement | null>(null);

//   const handleCopy = async () => {
//     try {
//       if (codeRef.current) {
//         const text = codeRef.current.innerText; 
//         await navigator.clipboard.writeText(text);
//       }
//     } catch(error) {
//       console.log("Error copying code:", error)
//     }
//   };

//   return (
//     <div className="relative group">
//       <CopyButton onClick={handleCopy}/>
//       <pre className="overflow-auto rounded-xl p-6 bg-[#1e1e1e] text-sm text-white min-h-[200px] whitespace-pre">
//         <code ref={codeRef} className={className} {...props}>
//           {children}
//         </code>
//       </pre>
//     </div>
//   );
// }