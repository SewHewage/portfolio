import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const KEYWORD_REPLIES = [
  { keys: ['skill','tech','stack','language','framework'], reply: "Sewmini works with React.js, Laravel, Node.js, Flutter, AWS, Azure, and more. Full-stack with real cloud experience! ☁️" },
  { keys: ['project','work','built','app','system'], reply: "She's built a Lifestyle Travel platform, School Management System, and an ERP for Brandix Group! 🚀" },
  { keys: ['experience','job','role','intern','company'], reply: "Currently Junior Web & Mobile Developer at Aahaas (Pvt) Ltd. Previously interned at Sky Smart Technology building full-stack systems." },
  { keys: ['contact','hire','email','reach'], reply: "Reach Sewmini at tsewmini.hewage@gmail.com — or scroll down to the Contact section! 📩" },
  { keys: ['education','degree','university','gpa','study'], reply: "She holds a BICT (Hons) in Software Systems Technology from South Eastern University of Sri Lanka. GPA: 3.2 🎓" },
  { keys: ['aws','cloud','certif'], reply: "Sewmini is AWS Academy Cloud Foundations certified and also holds CISCO CCNA certifications! ☁️" },
];

const GREETING = "Hi! 👋 I'm Sewmini's portfolio assistant. Ask me about her skills, projects, or experience!";

function getReply(msg) {
  const lower = msg.toLowerCase();
  for (const { keys, reply } of KEYWORD_REPLIES) {
    if (keys.some(k => lower.includes(k))) return reply;
  }
  return "Great question! For more details, check the sections above or contact Sewmini directly. 😊";
}

export default function FloatingChatbot() {
  const { dark } = useTheme();
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState([{ from: 'ai', text: GREETING }]);
  const [input, setInput]     = useState('');
  const [typing, setTyping]   = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { from: 'ai', text: getReply(text) }]);
    }, 650);
  };

  const panelBg     = dark ? '#111111' : '#FFFFFF';
  const panelBorder = dark ? '#2a2a2a' : '#E5E5E5';
  const textPrimary = dark ? '#F5F5F5' : '#0D0D0D';
  const textMuted   = dark ? '#888888' : '#666666';
  const aiBubbleBg  = dark ? '#1F1F1F' : '#F0F0F0';
  const inputBorder = dark ? '#333333' : '#DDDDDD';

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', bottom: '96px', right: '28px',
              width: '360px', height: '480px', zIndex: 9998,
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              borderRadius: '20px', background: panelBg,
              border: `1px solid ${panelBorder}`,
              boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '14px 18px', flexShrink: 0,
              borderBottom: `1px solid ${panelBorder}`,
              background: dark
                ? 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(17,17,17,0.98) 100%)'
                : 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(255,255,255,0.98) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <motion.span
                  animate={{ boxShadow: ['0 0 6px rgba(201,168,76,0.5)', '0 0 14px rgba(201,168,76,0.9)', '0 0 6px rgba(201,168,76,0.5)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 9, height: 9, borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }}
                />
                <div>
                  <p style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 13, color: textPrimary }}>Sewmini's AI Assistant</p>
                  <p style={{ margin: 0, fontSize: 11, color: textMuted, fontFamily: "'DM Sans',sans-serif" }}>Ask me anything about Sewmini's work</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: textMuted, display: 'flex', padding: 4 }}>
                <X size={17} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '82%', padding: '9px 13px', fontSize: 13, lineHeight: 1.5,
                    fontFamily: "'DM Sans',sans-serif",
                    borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.from === 'user' ? '#C9A84C' : aiBubbleBg,
                    color: msg.from === 'user' ? '#000000' : textPrimary,
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ padding: '9px 16px', borderRadius: '18px 18px 18px 4px', background: aiBubbleBg, color: textMuted, fontSize: 20, letterSpacing: 3 }}>···</div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div style={{ padding: '10px 14px', borderTop: `1px solid ${panelBorder}`, display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0, background: panelBg }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask about Sewmini..."
                style={{
                  flex: 1, padding: '9px 16px', borderRadius: '75px',
                  border: `1px solid ${inputBorder}`, background: 'transparent',
                  color: textPrimary, fontSize: 13, fontFamily: "'DM Sans',sans-serif", outline: 'none',
                }}
              />
              <motion.button
                onClick={send}
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                style={{ width: 40, height: 40, borderRadius: '50%', background: '#C9A84C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              >
                <Send size={15} color="#000" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating button — bobs up and down ── */}
      <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
        {/* Float wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity }}
          style={{ position: 'relative' }}
        >
          {/* Pulse ring */}
          <motion.span
            animate={{ scale: [1, 1.55, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(201,168,76,0.45)', pointerEvents: 'none' }}
          />

          {/* Tooltip */}
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 4 }} whileHover={{ opacity: 1, y: 0 }}
              style={{
                position: 'absolute', bottom: 66, right: 0, whiteSpace: 'nowrap',
                background: panelBg, color: textPrimary,
                border: `1px solid ${panelBorder}`, borderRadius: 8,
                padding: '5px 12px', fontSize: 12,
                fontFamily: "'DM Sans',sans-serif",
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', pointerEvents: 'none',
              }}
            >
              Chat with AI
            </motion.div>
          )}

          {/* Main button */}
          <motion.button
            onClick={() => setOpen(v => !v)}
            whileHover={{ scale: 1.12, boxShadow: '0 8px 32px rgba(201,168,76,0.5)' }}
            whileTap={{ scale: 0.93 }}
            aria-label={open ? 'Close chat' : 'Open AI chat'}
            style={{
              width: 60, height: 60, borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)',
              border: '2px solid rgba(255,255,255,0.15)',
              cursor: 'pointer', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
              fontSize: '28px', lineHeight: 1,
              userSelect: 'none',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <X size={24} color="white" />
                </motion.span>
              ) : (
                <motion.span
                  key="robot"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: [1, 1.08, 1], opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.2 } }}
                  style={{ display: 'block', fontSize: '26px', lineHeight: 1 }}
                  role="img"
                  aria-label="AI Robot"
                >
                  🤖
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
