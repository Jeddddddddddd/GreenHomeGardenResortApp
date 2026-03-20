import React, { useState, useEffect, useRef } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to Green Home Garden Resort\nHow can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;

    const updated = [...messages, { text: input, sender: "user" }];
    let reply = "Sorry, I can't help with that. Please ask me about our resort amenities or tour schedules!";

    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hi") || lowerInput.includes("hey") || lowerInput.includes("hello")) {
      reply = "Hi, Welcome To Green Home Garden Resort, How can I help you?";
    } else if (lowerInput.includes("contact") || lowerInput.includes("number")) {
      reply = "Scroll down to the Contact section or click the Contact at the top section.";
    } else if (lowerInput.includes("packages") || lowerInput.includes("package")) {
      reply = "Scroll down to the Packages section or click the Packages at the top section.";
    } else if (lowerInput.includes("content") || lowerInput.includes("context")) {
      reply = "Scroll down to the About section or click the About at the top section.";
    } else if (lowerInput.includes("entrance") || lowerInput.includes("rate") || lowerInput.includes("price") || lowerInput.includes("fee") || lowerInput.includes("person")) {
      reply = "Day Tour (10AM-3PM) = 75/HEAD\nNight Tour (3PM-9PM) = 100/HEAD\nOvernight (3PM-10AM) = Depends on package";
    } else if (lowerInput.includes("food") || lowerInput.includes("corkage")) {
      reply = "We allow outside food!\nNo corkage fee for food.\nNote: Corkage fee applies to alcoholic drinks only.";
    } else if (lowerInput.includes("where") || lowerInput.includes("location")) {
      reply = "We are located at:\nBrgy. Sto. Niño, near Mintal, Davao City.\nRight in front of Vista Mall!";
    } else if (lowerInput.includes("event") || lowerInput.includes("rent") || lowerInput.includes("wedding")) {
      reply = "Yes! We cater to exclusive events.\nPlease contact us directly for 'Exclusive Use' rates and availability.";
    } else if (lowerInput.includes("pool") || lowerInput.includes("swim")) {
      reply = "Pool hours match your tour schedule.\nProper swimming attire is required for all guests.";
    } else if (lowerInput.includes("room") || lowerInput.includes("rooms")) {
      reply = "Kindly check for the Packages at the top side or scroll down at the Packages page.";
    } else if (lowerInput.includes("open") || lowerInput.includes("time") || lowerInput.includes("hours")) {
      reply = "Our resort is open from 8:00 AM to 10:00 PM.";
    } else if (lowerInput.includes("gcash") || lowerInput.includes("payment")) {
      reply = "We accept GCash and cash payments for reservations.";
    }

    updated.push({ text: reply, sender: "bot" });
    setMessages(updated);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#04502c",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 10px 25px rgba(0, 230, 118, 0.4)",
          transition: "transform 0.3s ease",
          color: "white"
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? "✕" : "💬"}
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "90%",
            maxWidth: "400px",
            height: "500px",
            maxHeight: "80vh",
            backgroundColor: "rgba(20, 44, 20, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "25px",
            border: "1px solid rgba(0, 230, 118, 0.2)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            overflow: "hidden",
            whiteSpace: "pre-line",
            textAlign: "left",
            transition: "all 0.3s ease"
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "15px",
              backgroundColor: "rgba(0, 230, 118, 0.1)",
              borderBottom: "1px solid rgba(0, 230, 118, 0.1)",
              textAlign: "center"
            }}
          >
            <h4
              style={{
                margin: 0,
                color: "#00e676",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "12px"
              }}
            >
              Resort Assistant
            </h4>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              padding: "15px",
              overflowY: "auto",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                  padding: "10px 14px",
                  borderRadius: msg.sender === "user" ? "18px 18px 0 18px" : "18px 18px 18px 0",
                  backgroundColor: msg.sender === "user" ? "#00e676" : "rgba(255,255,255,0.1)",
                  color: msg.sender === "user" ? "#000" : "#fff",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  wordBreak: "break-word"
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: "15px",
              display: "flex",
              gap: "10px",
              backgroundColor: "rgba(0,0,0,0.2)"
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#fff",
                outline: "none",
                fontSize: "14px"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: "#00e676",
                border: "none",
                borderRadius: "12px",
                padding: "0 16px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "#000",
                fontSize: "14px"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;