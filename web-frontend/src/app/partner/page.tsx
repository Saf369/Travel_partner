"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp, Loader2, Bot, User } from "lucide-react";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

export default function PartnerScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I am your AI Travel Partner. Where would you like to go?",
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `That sounds like a great idea! I can help you plan a trip there. Should we start looking at flights or accommodations?`,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-4rem)] md:h-screen w-full relative">
      {/* Header */}
      <div className="px-6 md:px-10 py-5 border-b border-background-element bg-background/80 backdrop-blur-md sticky top-0 z-10 shrink-0 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Travel Partner</h1>
          <p className="text-sm text-text-secondary mt-0.5">Plan your next adventure</p>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-4 md:px-10 pt-8 pb-36 flex flex-col gap-6">
        <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-4 max-w-[90%] md:max-w-[85%] ${msg.isUser ? "self-end flex-row-reverse" : "self-start"}`}
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.isUser ? "bg-foreground text-background" : "bg-blue-600 text-white"}`}>
                {msg.isUser ? <User size={18} className="md:w-5 md:h-5" /> : <Bot size={18} className="md:w-5 md:h-5" />}
              </div>
              <div
                className={`px-5 py-3.5 rounded-2xl text-[15px] md:text-base leading-relaxed shadow-sm ${
                  msg.isUser
                    ? "bg-foreground text-background rounded-tr-sm"
                    : "bg-background-element text-foreground rounded-tl-sm border border-background-selected/30"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4 self-start max-w-[85%]">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Bot size={18} className="md:w-5 md:h-5" />
              </div>
              <div className="px-5 py-3.5 rounded-2xl bg-background-element text-foreground rounded-tl-sm flex items-center gap-2 border border-background-selected/30 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-text-secondary" />
                <span className="text-sm text-text-secondary font-medium">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 px-4 md:px-10 bg-gradient-to-t from-background via-background to-transparent pt-12">
        <div className="max-w-4xl mx-auto w-full relative">
          <div className="flex items-end gap-2 bg-background-element border border-background-selected rounded-3xl p-2 shadow-lg transition-shadow focus-within:shadow-xl focus-within:border-text-secondary/30">
            <textarea
              className="flex-1 min-h-[44px] max-h-[200px] bg-transparent text-foreground px-4 py-3 text-[15px] md:text-base resize-none focus:outline-none"
              placeholder="Ask about flights, hotels, itineraries..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className="w-10 h-10 md:w-11 md:h-11 mb-1 mr-1 rounded-full bg-foreground flex items-center justify-center transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shrink-0 shadow-sm"
            >
              <ArrowUp className="w-5 h-5 text-background" strokeWidth={2.5} />
            </button>
          </div>
          <p className="text-center text-xs text-text-secondary mt-3 font-medium">
            AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}
