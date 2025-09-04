# MCP Chat & Email Playground 🧠📨

A simple full-stack application that lets you:
- Chat with your resume using AI 🤖
- Send custom email notifications via a form 📬

Built with:
- **Next.js** (frontend)
- **Node.js / Express** (backend)
- **Nodemailer** for email
- **Groq API** for AI chat
- **YAML** for resume data

---

## 🚀 Features

- Ask questions about your resume (e.g. "What are my skills?")
- Send an email by entering recipient, subject, and body
- All responses are generated using your actual resume

---


## 🛠️ Getting Started

```bash
1. Clone the repo

2. Install backend dependencies

  cd mcp-server
  npm install

  Create a .env file with your email credentials and Groq API key:
  
  EMAIL_USER=your@email.com
  EMAIL_PASS=yourpassword
  GROQ_API_KEY=your_groq_api_key
  
  Start the backend:
  
  npm start

3. Install frontend dependencies

  cd mcp-frontend
  npm install
  npm run dev

<img width="1553" height="995" alt="Screenshot 2025-09-04 at 08-04-12 " src="https://github.com/user-attachments/assets/2f824f64-4049-41e6-8989-2423d226e8cc" />
<img width="1161" height="863" alt="Screenshot 2025-09-04 at 08-03-10 " src="https://github.com/user-attachments/assets/923c5702-77cb-405e-acf3-f81b8e142811" />

