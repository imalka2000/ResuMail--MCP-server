require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//MIDDLEWARE to parse JSON
app.use(express.json());

const chatRoute = require('./routes/chat');
const emailRoute = require('./routes/email');

app.use('/api/chat', chatRoute);
app.use('/api/email', emailRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`MCP server running on port ${PORT}`));
