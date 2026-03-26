"use client";

import axiosInstance from "@/lib/axios";

export default async function uploadimg({ file, onProgress, onComplete, onError }) {
  try {
    const { tenant_id } = await fetch("/api/tenant").then(r => r.json());

    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const { Authorization, apikey } = axiosInstance.defaults.headers.common;

    const response = await fetch("https://wyugrtlpvoeszmaqsbsc.supabase.co/functions/v1/eyekemet-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(Authorization && { Authorization }),
        ...(apikey && { apikey }),
      },
      body: JSON.stringify({
        tenant_id,
        image_url: base64,
        style: "realistic",
        stream: true
      }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let newlineIndex;
      while ((newlineIndex = buffer.indexOf("\n\n")) !== -1) {
        const chunk = buffer.slice(0, newlineIndex);
        buffer = buffer.slice(newlineIndex + 2);

        const eventMatch = chunk.match(/^event: (\w+)/);
        const dataMatch = chunk.match(/data: (.+)/);

        if (eventMatch && dataMatch) {
          const event = eventMatch[1];
          const data = JSON.parse(dataMatch[1]);

          if (event === "progress") onProgress?.(data.progress);
          else if (event === "complete") onComplete?.(data);
          else if (event === "error") onError?.(data.message);
        }
      }
    }
  } catch (error) {
    console.log("the error is" , error)
    onError?.(error?.data?.message);
  }
}