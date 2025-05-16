"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send, ThumbsUp, ThumbsDown } from "lucide-react"

interface ChatFeedbackProps {
  onClose: () => void
  messageId: string
}

export default function ChatFeedback({ onClose, messageId }: ChatFeedbackProps) {
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState<"positive" | "negative" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!rating) return

    setIsSubmitting(true)

    // Simulação de envio para API
    setTimeout(() => {
      console.log({
        messageId,
        rating,
        feedback,
      })

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Fechar após alguns segundos
      setTimeout(onClose, 2000)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-white">Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-6">
            <ThumbsUp className="h-12 w-12 text-white mb-4" />
            <p className="text-white text-lg font-medium">Obrigado pelo seu feedback!</p>
            <p className="text-zinc-400 text-center mt-2">
              Suas sugestões são muito importantes para melhorarmos o chatbot da FURIA.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant={rating === "positive" ? "default" : "outline"}
                size="lg"
                className={`rounded-full p-3 ${
                  rating === "positive" ? "bg-green-600 hover:bg-green-700" : "border-zinc-700 hover:bg-zinc-800"
                }`}
                onClick={() => setRating("positive")}
              >
                <ThumbsUp className="h-6 w-6" />
                <span className="sr-only">Positivo</span>
              </Button>
              <Button
                variant={rating === "negative" ? "default" : "outline"}
                size="lg"
                className={`rounded-full p-3 ${
                  rating === "negative" ? "bg-red-600 hover:bg-red-700" : "border-zinc-700 hover:bg-zinc-800"
                }`}
                onClick={() => setRating("negative")}
              >
                <ThumbsDown className="h-6 w-6" />
                <span className="sr-only">Negativo</span>
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-zinc-400">Conte-nos mais sobre sua experiência (opcional):</p>
              <Textarea
                placeholder="O que podemos melhorar?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-[100px] border-zinc-700 bg-zinc-800 focus-visible:ring-white/50"
              />
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {!isSubmitted && (
          <>
            <Button variant="ghost" onClick={onClose} className="text-zinc-400 hover:text-white hover:bg-zinc-800">
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !rating}
              className="bg-white text-black hover:bg-zinc-200"
            >
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Enviar Feedback
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
