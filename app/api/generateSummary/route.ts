import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();
  console.log(todos);

  //communicate with openAI GPT
  // Create a chat completion using the current OpenAI API
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user always say welcome to the Todo App! Limit the response to 200 characters.`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, In Progress, and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
    temperature: 0.8,
    n: 1,
    stream: false,
  });

  // Extract the assistant's message from the response
  const { choices } = response;
  const message = choices[0].message;

  // Return the assistant's message as a JSON response
  return NextResponse.json(message);
}
