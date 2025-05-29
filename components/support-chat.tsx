"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function SupportChat() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      content: input,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content: getBotResponse(input),
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I assist you with F-Guard WAF today?"
    }
    
    if (lowerMessage.includes("pricing") || lowerMessage.includes("cost")) {
      return "We offer flexible pricing plans starting from $49/month. Would you like me to provide more details about our pricing options?"
    }
    
    if (lowerMessage.includes("feature") || lowerMessage.includes("capability")) {
      return "F-Guard WAF offers advanced features like real-time threat detection, DDoS protection, and custom rule creation. What specific features are you interested in?"
    }
    
    if (lowerMessage.includes("support") || lowerMessage.includes("help")) {
      return "Our support team is available 24/7. You can reach us through email at support@f-guard.com or through our documentation portal."
    }
    
    if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    }
    
    return "I understand your question. Let me connect you with our support team for more detailed assistance. Would you like me to do that?"
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] z-50"
          >
            <Card className="w-full h-full bg-gradient-to-br from-background to-background/80 backdrop-blur-sm border-primary/20">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Support Chat</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-primary/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <ScrollArea className="h-[calc(100%-8rem)] p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start gap-2 max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <div className={`p-2 rounded-full ${
                          message.sender === "user" ? "bg-primary" : "bg-primary/10"
                        }`}>
                          {message.sender === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-primary text-white"
                              : "bg-primary/10 text-foreground"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-2 h-2 bg-primary rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                            className="w-2 h-2 bg-primary rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
