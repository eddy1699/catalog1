
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "LuxeAssistant", a highly professional, sophisticated, and helpful personal shopper for LuxeModern, a high-end product catalog.
Your goal is to help clients find the perfect products from our global collection.

We specialize in premium imports from design capitals like Italy, Japan, Germany, and Denmark.

Here is our current catalog of products:
${JSON.stringify(PRODUCTS, null, 2)}

Instructions:
1. Be polite, upscale, and concise.
2. Recommend specific products from the list above based on user needs.
3. Highlight premium features, origins, and craftsmanship (e.g., mention "German engineering" or "Italian leather").
4. If a user asks for something not in the catalog, suggest the closest alternative or explain that we specialize in curated high-end pieces.
5. Provide prices and key specifications (like origin and materials) when appropriate.
6. Use professional yet welcoming language, as if speaking to a VIP client in a luxury showroom.
`;

export async function getAssistantResponse(history: Message[]): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I'm having trouble connecting to our showroom systems. How can I assist you otherwise?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently unavailable to assist with specific recommendations, but please browse our stunning collection of global imports below.";
  }
}
