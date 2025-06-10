import { useRef } from "react";

export function CodeBlock({ inline, className, children, ...props }) {
  const codeRef = useRef(null);

  const handleCopy = async () => {
    if (codeRef.current) {
      const text = codeRef.current.innerText; 
      await navigator.clipboard.writeText(text);
    }
  };

  if (inline) {
    return null;
  }

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        Copy
      </button>
      <pre className="overflow-auto rounded-xl p-4 bg-[#1e1e1e] text-sm text-white">
        <code ref={codeRef} className={className} {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
}