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
        setMessages(prev => [...prev, { role: "user", content: input }]);
    
        const res = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({messages: input}),
        };

        try {
            const response = await fetch("/api/groq", res);
            if (!response.ok) throw new Error("Error fetching data");
            const data = await response.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.choices[0].message.content}]);
            console.log("DATA:", data);
            console.log("CONTENT:", data.choices[0].message.content);
            console.log("MESSAGES", messages);
            setInput("");
        } catch (error: unknown) {
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