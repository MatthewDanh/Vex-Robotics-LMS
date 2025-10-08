import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            temperature: 0.7,
            topP: 0.95,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, I couldn't generate a response. Please check the console for details.";
  }
};

export const generateQuiz = async (topic: string): Promise<QuizQuestion[]> => {
    const prompt = `Generate 10 multiple-choice quiz questions about VEX IQ robotics for middle school students, focusing specifically on the topic of "${topic}".
    The questions should be relevant to a sprint covering these concepts.
    For each question, provide 4 options and clearly indicate the correct answer.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        questions: {
                            type: Type.ARRAY,
                            description: "A list of quiz questions.",
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    question: {
                                        type: Type.STRING,
                                        description: "The quiz question text."
                                    },
                                    options: {
                                        type: Type.ARRAY,
                                        description: "An array of 4 possible answers.",
                                        items: { type: Type.STRING }
                                    },
                                    correctAnswer: {
                                        type: Type.STRING,
                                        description: "The correct answer, which must be one of the options."
                                    }
                                },
                                required: ["question", "options", "correctAnswer"]
                            }
                        }
                    },
                    required: ["questions"]
                },
            },
        });

        const jsonText = response.text.trim();
        if (!jsonText) {
            console.error("Received empty response from Gemini for quiz generation.");
            return [];
        }
        const parsedData = JSON.parse(jsonText);
        return parsedData.questions || [];

    } catch (error) {
        console.error("Error generating quiz:", error);
        throw new Error("Failed to generate quiz questions.");
    }
};
