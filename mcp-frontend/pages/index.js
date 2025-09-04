import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [emailData, setEmailData] = useState({ recipient: "", subject: "", body: "" });
  const [emailStatus, setEmailStatus] = useState("");

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setChatResponse("Loading...");
    try {
      const res = await axios.post("http://localhost:3001/api/chat", { message: chatInput });
      setChatResponse(res.data.reply || "No reply from server");
    } catch (error) {
      setChatResponse("Error: " + (error.response?.data?.error || error.message));
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailStatus("Sending...");
    try {
      await axios.post("http://localhost:3001/api/email", emailData);
      setEmailStatus("Email sent!");
      setEmailData({ recipient: "", subject: "", body: "" });
    } catch (error) {
      setEmailStatus("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h1>MCP Chat & Email Playground</h1>

      <section>
        <h2>Chat about your CV</h2>
        <form onSubmit={handleChatSubmit}>
          <input
            type="text"
            placeholder="Ask something about your resume..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
            required
          />
          <button type="submit" style={{ marginTop: "0.5rem" }}>Send</button>
        </form>
        <pre style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#222",
          color: "#eee",
          padding: "1rem",
          borderRadius: "4px",
          marginTop: "1rem"
        }}>
          {chatResponse || "No response yet."}
        </pre>
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <h2>Send Email Notification</h2>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Recipient email"
            value={emailData.recipient}
            onChange={(e) => setEmailData({ ...emailData, recipient: e.target.value })}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={emailData.subject}
            onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            required
          />
          <textarea
            placeholder="Email body"
            value={emailData.body}
            onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem", height: "100px" }}
            required
          />
          <button type="submit" style={{ padding: "0.5rem 1rem" }}>Send Email</button>
        </form>
        {emailStatus && <p style={{ marginTop: "1rem" }}>{emailStatus}</p>}
      </section>
    </div>
  );
}
