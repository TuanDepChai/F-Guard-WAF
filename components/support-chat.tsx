"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export default function SupportChat() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t("supportChat.startMessage"),
      sender: "agent",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, userMessage])
    setMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        text: "Thank you for your message. Our team will get back to you shortly.",
        sender: "agent",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prevMessages) => [...prevMessages, agentMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">{t("supportChat.title")}</span>
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl flex flex-col z-50 border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">{t("supportChat.title")}</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === "user" ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  {msg.sender === "agent" && (
                    <p className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400">
                      {t("supportChat.agentName")}
                    </p>
                  )}
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs text-right mt-1 opacity-70">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex gap-2"
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("supportChat.placeholder")}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">{t("supportChat.sendButton")}</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
