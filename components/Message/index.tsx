import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface MessageProps {
    message:  {
        role: "user" | "assistant";
        content: string;
    };
}

export default function Message({ message }: MessageProps) {
    return (
        <div
        className={`
        max-w-[70%] px-4 py-2 rounded-lg break-words
        ${message.role === 'user'
            ? 'self-end bg-blue-600 text-white rounded-tr-none'
            : 'self-start bg-gray-800 text-white rounded-tl-none'}
        `}
    >
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="mt-2" {...props} />,
                ul: (props) => <ul className="list-disc ml-6 text-white mt-2" {...props} />,
                ol: (props) => <ol className="list-decimal ml-6 text-white mt-2" {...props} />,
                code: (props) => (
                <code
                    className="bg-gray-800 text-gray-100 px-2 py-0.5 rounded font-mono text-sm"
                    {...props}
                />
                ),
                pre: (props) => (
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto" {...props} />
                ),
            }}
            >
            {message.content}
        </ReactMarkdown>
    </div>
    );
}