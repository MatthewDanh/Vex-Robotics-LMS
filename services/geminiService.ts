import { GoogleGenAI, Type } from "@google/genai";
// Fix: Import QuizQuestion type to be used in the generateQuiz function.
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

// Fix: Add generateQuiz function to provide data for the QuizView component.
export const generateQuiz = async (topic: string): Promise<QuizQuestion[]> => {
  const prompt = `Generate a 5-question multiple-choice quiz about "${topic}".
  Each question should have exactly 4 options.
  The 'correctAnswer' field must be one of the strings from the 'options' array.
  Do not include any introductory text or summary, only the JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              description: 'An array of 5 quiz questions.',
              items: {
                type: Type.OBJECT,
                properties: {
                  question: {
                    type: Type.STRING,
                    description: 'The text of the quiz question.',
                  },
                  options: {
                    type: Type.ARRAY,
                    description: 'An array of 4 string options.',
                    items: {
                      type: Type.STRING,
                    },
                  },
                  correctAnswer: {
                    type: Type.STRING,
                    description: 'The correct answer, which must be one of the provided options.',
                  },
                },
                required: ['question', 'options', 'correctAnswer'],
              },
            },
          },
          required: ['questions'],
        },
        temperature: 0.3,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("Gemini API returned an empty response.");
    }
    const parsed = JSON.parse(jsonText);
    return parsed.questions || [];
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw new Error("Failed to generate quiz from Gemini API.");
  }
};
