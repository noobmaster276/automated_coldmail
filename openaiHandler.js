// openaiHandler.js
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});

async function getOpenAIResponse() {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ "role": "user", "content": "draft an email to send to 10 friends for an invitation to a birthday party on 29/7 and address yourself as shreyash" }],
      max_tokens: 200
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('OpenAI request failed');
  }
}

module.exports = { getOpenAIResponse };