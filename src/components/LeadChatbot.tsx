"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-effect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { X, Send, MessageCircle } from "lucide-react";
import Image from "next/image";

// ─── Questionnaire flow ───────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: "name",
    text: "Hi! Welcome to LP Realty 👋 What's your name?",
    placeholder: "Your full name",
  },
  {
    id: "interest",
    text: "Great to meet you, {name}! Are you looking to Buy, Sell, or Invest?",
    placeholder: "Buy / Sell / Invest",
    options: ["Buy", "Sell", "Invest"],
  },
  {
    id: "area",
    text: "Which area or city are you focused on?",
    placeholder: "e.g. Sandton, Sea Point, Cape Town...",
  },
  {
    id: "budget",
    text: "What's your approximate budget or property value?",
    placeholder: "e.g. R 3,500,000",
  },
  {
    id: "phone",
    text: "Almost done! What's the best number to reach you on?",
    placeholder: "e.g. 082 000 0000",
  },
  {
    id: "email",
    text: "And your email address?",
    placeholder: "your@email.com",
  },
];

const LP_WHATSAPP = "27833340078";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  from: "bot" | "user";
  text: string;
}

interface Answers {
  [key: string]: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function LeadChatbot() {
  const [isOpen, setIsOpen]     = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [answers, setAnswers]   = useState<Answers>({});
  const [step, setStep]         = useState(0);
  const [input, setInput]       = useState("");
  const [done, setDone]         = useState(false);
  const scrollRef               = useRef<HTMLDivElement>(null);

  // Send first question on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ from: "bot", text: QUESTIONS[0].text }]);
      }, 400);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const interpolate = (text: string, data: Answers) =>
    text.replace(/{(\w+)}/g, (_, key) => data[key] || "");

  const handleSend = (value?: string) => {
    const userInput = (value ?? input).trim();
    if (!userInput) return;

    const currentQuestion = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQuestion.id]: userInput };
    const newMessages: Message[] = [
      ...messages,
      { from: "user", text: userInput },
    ];

    setAnswers(newAnswers);
    setInput("");

    const nextStep = step + 1;

    if (nextStep < QUESTIONS.length) {
      setTimeout(() => {
        const nextQ = interpolate(QUESTIONS[nextStep].text, newAnswers);
        setMessages([...newMessages, { from: "bot", text: nextQ }]);
        setStep(nextStep);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages([
          ...newMessages,
          {
            from: "bot",
            text: `Thanks ${newAnswers.name}! 🎉 One of our agents will be in touch shortly. Click below to send your details directly to LP Realty on WhatsApp.`,
          },
        ]);
        setDone(true);
      }, 500);
    }

    setMessages(newMessages);
  };

  const buildWhatsAppMessage = () => {
    const { name, interest, area, budget, phone, email } = answers;
    const msg = `🏠 *New LP Realty Lead*\n\n*Name:* ${name}\n*Interest:* ${interest}\n*Area:* ${area}\n*Budget:* ${budget}\n*Phone:* ${phone}\n*Email:* ${email}`;
    return `https://wa.me/${LP_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  const resetChat = () => {
    setMessages([]);
    setAnswers({});
    setStep(0);
    setInput("");
    setDone(false);
    setIsOpen(false);
  };

  const currentOptions = QUESTIONS[step]?.options;

  return (
    <>
      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-7 right-7 z-50 flex items-center gap-2
                   bg-[#003f47] text-white px-5 py-3 rounded-full shadow-lg
                   font-sans font-semibold text-sm hover:bg-[#003f47]/90
                   transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open lead chat"
      >
        <MessageCircle className="w-4 h-4" />
        Chat with us
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center
                       justify-center sm:justify-end sm:p-8 bg-black/40
                       backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && resetChat()}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative w-full sm:w-[420px] h-[80vh] sm:h-[580px] rounded-t-2xl sm:rounded-2xl
                         overflow-hidden shadow-xl bg-white flex flex-col"
            >
              {/* Canvas hover effect */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  >
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-transparent opacity-10"
                      colors={[[0, 63, 71]]}
                      dotSize={2}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between
                              px-5 py-4 bg-[#003f47]">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/20 shadow-sm shrink-0">
                    <div className="relative w-6 h-6">
                        <Image 
                        src="/logo square.png" 
                        alt="LP Realty Logo" 
                        fill 
                        className="object-contain"
                        />
                    </div>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-white text-sm">
                      LP Realty
                    </p>
                    <p className="font-mono text-[10px] text-white/60
                                  uppercase tracking-wider">
                      We typically reply instantly
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetChat}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="relative z-10 flex-1 overflow-y-auto px-4 py-4
                           space-y-3 bg-neutral-100"
              >
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex",
                      msg.from === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[78%] px-4 py-2.5 rounded-2xl font-sans text-sm leading-relaxed",
                        msg.from === "bot"
                          ? "bg-white text-neutral-800 shadow-sm rounded-tl-sm"
                          : "bg-[#003f47] text-white rounded-tr-sm"
                      )}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick-reply buttons */}
              {!done && currentOptions && (
                <div className="relative z-10 flex gap-2 px-4 pb-2 flex-wrap
                                bg-white border-t border-neutral-200 pt-3">
                  {currentOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSend(opt)}
                      className="px-4 py-1.5 rounded-full border border-[#003f47]
                                 text-[#003f47] font-sans text-xs font-semibold
                                 hover:bg-[#003f47] hover:text-white transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* WhatsApp CTA */}
              {done && (
                <div className="relative z-10 px-4 pb-4 bg-white border-t
                                border-neutral-200 pt-3">
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full
                               bg-[#25D366] text-white font-sans font-semibold
                               text-sm py-3 rounded-xl hover:bg-[#1ebe5d]
                               transition-colors shadow-md"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.132 1.528 5.88L.057 23.868l6.04-1.449A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.907 9.907 0 01-5.031-1.368l-.361-.214-3.735.897.934-3.634-.235-.374A9.869 9.869 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
                    </svg>
                    Send to LP Realty on WhatsApp
                  </a>
                </div>
              )}

              {/* Text input */}
              {!done && (
                <div className="relative z-10 flex gap-2 px-4 py-3 bg-white
                                border-t border-neutral-200">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      currentOptions
                        ? "Or type your answer..."
                        : QUESTIONS[step]?.placeholder ?? "Type here..."
                    }
                    className="flex-1 rounded-xl border-neutral-200
                               focus-visible:ring-[#003f47] text-xs"
                  />
                  <Button
                    onClick={() => handleSend()}
                    size="icon"
                    className="bg-[#EC9040] hover:bg-[#EC9040]/90
                               rounded-xl flex-shrink-0"
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
