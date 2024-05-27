import OpenAI from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export default openai;
