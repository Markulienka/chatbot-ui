import React, { useEffect, useState } from "react";

export function useChatHooks() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [hasTyped, setHasTyped] = useState(false);

    // useEffect(() => {
    //     if (hasTyped && onUserTyping) {
    //         onUserTyping();
    //     }
    // }, [hasTyped, onUserTyping]);

     const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        // if (value.trim() !== "" && !hasTyped) {
        //     setHasTyped(true);
        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);
        setResult(null);
    
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
            setResult(data.choices[0].message.content);
            console.log("DATA:", data);
            console.log("CONTENT:", data.choices[0].message.content);
            setInput("");
        } catch (error) {
            setErrorMessage(error.message);
        } finally { 
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        errorMessage,
        input,
        result, 
        hasTyped,
        handleSubmit,
        handleChange
    };
}