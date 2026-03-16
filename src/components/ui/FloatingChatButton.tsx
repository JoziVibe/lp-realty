'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { Chatbot } from './Chatbot';

export function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isChatOpen && (
            <motion.button
              key="launcher"
              onClick={() => setIsChatOpen(true)}
              className="w-16 h-16 rounded-full bg-[#003f47] flex items-center justify-center shadow-xl text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              aria-label="Open chat"
            >
              <MessageSquare className="w-8 h-8" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[550px] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-3 border-b bg-card">
                <h3 className="font-serif font-medium text-lg pl-2">LP Realty Assistant</h3>
                <motion.button
                    onClick={() => setIsChatOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    aria-label="Close chat"
                >
                    <X className="w-5 h-5 text-muted-foreground" />
                </motion.button>
            </div>
            <div className="flex-1">
                <Chatbot />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
