"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedInput,
    };
    const assistantMessageId = crypto.randomUUID();
    const conversation = [...messages, userMessage];

    setError(null);
    setMessages([
      ...conversation,
      {
        id: assistantMessageId,
        role: "assistant",
        content: "",
      },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: conversation }),
      });

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || "The chat request failed.");
      }

      if (!response.body) {
        throw new Error("The chat response did not include a stream.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        assistantText += decoder.decode(value, { stream: true });

        setMessages((currentMessages) =>
          currentMessages.map((message) =>
            message.id === assistantMessageId
              ? { ...message, content: assistantText }
              : message
          )
        );
      }

      assistantText += decoder.decode();

      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: assistantText }
            : message
        )
      );
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong while contacting the assistant.";

      setError(message);
      setMessages((currentMessages) =>
        currentMessages.map((chatMessage) =>
          chatMessage.id === assistantMessageId
            ? {
                ...chatMessage,
                content: "I hit a problem while replying. Please try again.",
              }
            : chatMessage
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 flex h-[450px] w-80 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:w-96"
          >
            <div className="z-10 flex items-center justify-between bg-primary p-4 text-white shadow-md">
              <div>
                <h3 className="font-bold">The Delivery Support</h3>
                <p className="text-xs text-white/90">Executive Assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 transition-colors hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-gray-50 p-4">
              <div className="w-max max-w-[85%] rounded-2xl rounded-tl-sm border border-gray-100 bg-white p-3 text-sm text-gray-800 shadow-sm">
                Hi there! I&apos;m Naura The Delivery's assistant. How can I
                help you today?
              </div>

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-wrap shadow-sm ${
                    message.role === "user"
                      ? "self-end rounded-tr-sm bg-primary text-white"
                      : "self-start rounded-tl-sm border border-gray-100 bg-white text-gray-800"
                  }`}
                >
                  {message.content || (
                    <span className="flex items-center gap-2 text-gray-500">
                      <Loader2 size={14} className="animate-spin" />
                      Thinking...
                    </span>
                  )}
                </div>
              ))}

              {error && (
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-red-100 bg-red-50 p-3 text-sm text-red-700 shadow-sm">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex gap-2 border-t border-gray-100 bg-white p-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message..."
                className="w-full rounded-xl bg-gray-100 px-4 py-2 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded-xl bg-primary p-2 text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform hover:scale-110 hover:shadow-primary/40"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
