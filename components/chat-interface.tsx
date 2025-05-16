"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Loader2, ThumbsUp, ThumbsDown, Sparkles } from "lucide-react"

// Respostas pré-definidas para demonstração
const DEMO_RESPONSES = [
  "Olá! Sou o chatbot da FURIA. Como posso ajudar você hoje?",
  "A FURIA Esports foi fundada em 2017 por Jaime 'raizen' Pádua e André Akkari.",
  "O atual elenco de CS:GO da FURIA inclui Caído (Gabriel Toledo), yuurih (Yuri Santos), KSCERATO (Kaike Cerato), YEKINDAR (Mareks Gaļinskis) e Molodoy (Danil Golubenko).",
  "O próximo jogo da FURIA será contra Team Liquid pela ESL Pro League Season 19 no dia 15/05/2025.",
  "A FURIA compete em diversos jogos como CS:GO, VALORANT, League of Legends e Apex Legends.",
  "Uma das maiores conquistas da FURIA foi chegar ao Top 8 no PGL Major Stockholm 2021.",
  "Você pode comprar produtos oficiais da FURIA na loja online oficial: shop.furia.gg",
  "O treinador principal do time de CS:GO da FURIA é Sid 'Sidde' Macedo.",
  "Obrigado pelo seu interesse na FURIA! Alguma outra pergunta sobre nossos times ou jogadores?",
  "A FURIA tem uma gaming house em São Paulo, Brasil, onde os jogadores treinam e se preparam para competições.",
]

// Sugestões de perguntas para demonstração
const DEMO_SUGGESTIONS = [
  "Quem são os jogadores atuais do time de CS:GO?",
  "Quando será o próximo jogo da FURIA?",
  "Quais foram as maiores conquistas da FURIA?",
  "Quando a FURIA foi fundada?",
  "Onde posso comprar produtos oficiais da FURIA?",
  "Quem é o treinador do time de CS:GO?",
  "Em quais jogos a FURIA compete?",
  "Quem é Caído?",
  "A FURIA tem uma gaming house?",
]

export default function ChatInterface() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Olá! Sou o chatbot oficial da FURIA. Como posso ajudar você hoje? Você pode me perguntar sobre jogadores, próximos jogos, resultados recentes ou qualquer outra informação sobre a FURIA!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, "positive" | "negative" | null>>({})
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [suggestions, setSuggestions] = useState(DEMO_SUGGESTIONS.slice(0, 3))
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  // Detectar o tema atual
  useEffect(() => {
    // Verificar se o documento tem a classe light-theme
    const checkTheme = () => {
      const isLightTheme = document.documentElement.classList.contains("light-theme")
      setTheme(isLightTheme ? "light" : "dark")
    }

    // Verificar inicialmente
    checkTheme()

    // Criar um observer para detectar mudanças na classe do documento
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Adicionar mensagem do usuário
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowSuggestions(false)

    // Simular resposta do chatbot após um pequeno atraso
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * DEMO_RESPONSES.length)
      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: DEMO_RESPONSES[randomIndex],
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)

      // Gerar novas sugestões
      const newSuggestions = [...DEMO_SUGGESTIONS].sort(() => 0.5 - Math.random()).slice(0, 3)
      setSuggestions(newSuggestions)
      setShowSuggestions(true)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleFeedback = (messageId: string, type: "positive" | "negative") => {
    setFeedbackGiven((prev) => ({
      ...prev,
      [messageId]: type,
    }))

    // Simular agradecimento pelo feedback
    setTimeout(() => {
      const thankMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content:
          type === "positive"
            ? "Obrigado pelo feedback positivo! Fico feliz em poder ajudar. 😊"
            : "Obrigado pelo feedback! Vou me esforçar para melhorar minhas respostas.",
      }
      setMessages((prev) => [...prev, thankMessage])
    }, 500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    // Adicionar a sugestão como uma mensagem do usuário
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: suggestion,
    }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setShowSuggestions(false)

    // Simular resposta do chatbot após um pequeno atraso
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * DEMO_RESPONSES.length)
      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: DEMO_RESPONSES[randomIndex],
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)

      // Gerar novas sugestões
      const newSuggestions = [...DEMO_SUGGESTIONS].sort(() => 0.5 - Math.random()).slice(0, 3)
      setSuggestions(newSuggestions)
      setShowSuggestions(true)
    }, 1500)
  }

  return (
    <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
      <CardHeader className="bg-zinc-900 border-b border-zinc-800">
        <CardTitle className="text-white flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/furia-logo.png" alt="FURIA Bot" />
            <AvatarFallback className="bg-white text-black">FB</AvatarFallback>
          </Avatar>
          FURIA Bot
        </CardTitle>
        {/* Nota de demonstração adicionada aqui */}
        <div className="text-xs text-zinc-500 text-center mt-2">Versão de demonstração - Respostas simuladas</div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex flex-col gap-2">
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-white text-black ml-auto"
                        : theme === "light"
                          ? "bg-zinc-700 text-zinc-100"
                          : "bg-zinc-800 text-zinc-100"
                    }`}
                  >
                    {message.content}
                  </div>

                  {/* Botões de feedback apenas para mensagens do assistente */}
                  {message.role === "assistant" && message.id !== "welcome" && !feedbackGiven[message.id] && (
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Esta resposta foi útil?</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full hover:bg-green-500/20 hover:text-green-500"
                        onClick={() => handleFeedback(message.id, "positive")}
                      >
                        <ThumbsUp className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full hover:bg-red-500/20 hover:text-red-500"
                        onClick={() => handleFeedback(message.id, "negative")}
                      >
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                    </div>
                  )}

                  {/* Indicador de feedback dado */}
                  {message.role === "assistant" && feedbackGiven[message.id] && (
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <span>Obrigado pelo feedback!</span>
                      {feedbackGiven[message.id] === "positive" ? (
                        <ThumbsUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <ThumbsDown className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Sugestões de perguntas */}
            {showSuggestions && messages.length > 0 && messages[messages.length - 1].role === "assistant" && (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-1 text-xs text-zinc-500">
                  <Sparkles className="h-3 w-3" />
                  <span>Sugestões de perguntas:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className={`max-w-[80%] rounded-lg p-3 flex items-center gap-2 ${
                    theme === "light" ? "bg-zinc-700 text-zinc-100" : "bg-zinc-800 text-zinc-100"
                  }`}
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t border-zinc-800 bg-zinc-900">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={handleInputChange}
            className="border-zinc-800 bg-zinc-800 focus-visible:ring-white/50"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading} className="bg-white text-black hover:bg-zinc-200">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
