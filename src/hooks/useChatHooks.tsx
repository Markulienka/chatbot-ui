import React, { useState } from "react";

interface Messages {
    role: "user" | "assistant";
    content: string;
}

export function useChatHooks() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Messages[]>([]);
    const [hasTyped, setHasTyped] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInput(value);
        if (value.trim() !== "" && !hasTyped) {
            setHasTyped(true);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);
        const newMessage = { role: "user" as const, content: input };
        const updated = [...messages, newMessage];
        setMessages(updated);
        setInput("");

        const res = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ messages: updated }),
        };
        try {
            const response = await fetch("/api/groq", res);
            if (!response.ok) throw new Error("Error fetching data");
            const data = await response.json();
            if (data && Array.isArray(data.choices) && data.choices[0]?.message?.content) {
                const assistantMessage = { role: "assistant" as const, content: data.choices[0].message.content };
                setMessages(prev2 => {
                    const updatedMessages = [...prev2, assistantMessage];
                    fetch("/api/conversation", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ messages: updatedMessages }),
                    });
                    return updatedMessages;
                });
            } else if (data?.error) {
                setMessages(prev2 => [...prev2, { role: "assistant", content: "Nastala chyba: " + data.error }]);
            } else {
                setMessages(prev2 => [...prev2, { role: "assistant", content: "Neočakávaná odpoveď od servera." }]);
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Unknown error");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        errorMessage,
        input,
        messages, 
        hasTyped,
        handleSubmit,
        handleChange
    };
}