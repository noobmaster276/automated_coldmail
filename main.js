const express = require("express");
const OpenAI = require("openai");
const app = express();
app.use(express.json());

const openai = new OpenAI({
    apiKey: "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"
});

app.get('/getResponse', async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ "role": "user", "content": "essay on global warming" }],
            max_tokens: 100
        });

        console.log(response);
        res.json(response); // Send the response back to the client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log("server started");
});
