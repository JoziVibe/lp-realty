'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ChevronLeft } from 'lucide-react';

export function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen ? (
          // Chat is open, show a close button
          <motion.button
            key="close-btn"
            onClick={() => setIsChatOpen(false)}
            className="w-16 h-16 rounded-full bg-[#EC9040] flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <X className="w-8 h-8 text-black" />
          </motion.button>
        ) : (
          // Chat is closed, show the launcher
          <motion.div
            key="launcher"
            className="w-28 h-16 rounded-full bg-[#003f47] flex items-center justify-between pl-2 pr-1 relative shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setIsVisible(false)}
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={() => setIsChatOpen(true)}
              className="w-14 h-14 rounded-full bg-[#EC9040] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <MessageSquare className="w-7 h-7 text-black" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
