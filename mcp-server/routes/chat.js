const express = require('express');
const router = express.Router();
const fs = require('fs');
const yaml = require('js-yaml');
const axios = require('axios');

function loadResume() {
  const file = fs.readFileSync('resume/resume.yaml', 'utf8');
  return yaml.load(file);
}

router.post('/', async (req, res) => {
  const { message } = req.body;
  const resume = loadResume();

  try {
    const groqResponse = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.3-70b-versatile', // You can also try 'llama3-8b-8192'
        messages: [
          {
            role: 'system',
            content: "You are an assistant that answers questions about the user's resume.",
          },
          {
            role: 'user',
            content: `Resume:\n${JSON.stringify(resume)}\n\nUser asked: ${message}`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = groqResponse.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Groq error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Groq error' });
  }
});

module.exports = router;