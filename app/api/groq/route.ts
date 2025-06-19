import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const API_KEY = process.env.GROQ_API_KEY;
        const URL = process.env.GROQ_URL!;
        const API_OPTIONS = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                "model": "meta-llama/llama-4-scout-17b-16e-instruct",
                "messages": [{
                    "role": "user",
                    "content": body.messages
                }]
            })
        };

        const response = await fetch(URL, API_OPTIONS);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'failed to load data' });
    }
}