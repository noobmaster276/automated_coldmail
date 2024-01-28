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
            messages: [{ "role": "user", "content": "draft a email to send to 10 friends for an invitation to a birthday party on 29/7 address yourself as shreyash" }],
            max_tokens: 200
        });

        console.log(response.choices[0].message);
        res.json(response); // Send the response back to the client
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log("server started");
});

