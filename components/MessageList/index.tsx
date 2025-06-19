import Message from "../Message";

interface MessageListProps {
  messages: {
    role: "user" | "assistant";
    content: string;
  }[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div
      className="
        flex flex-col gap-4 w-full max-w-6xl mb-6 overflow-auto
        bg-gray-900 p-6 rounded-lg shadow-lg
        max-h-[85vh] prose prose-invert
      "
    >
      {messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </div>
  );
}