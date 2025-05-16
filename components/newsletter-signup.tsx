"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulação de envio para API
    try {
      // Simulando um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Validação básica de email
      if (!email.includes("@") || !email.includes(".")) {
        throw new Error("Por favor, insira um email válido")
      }

      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro ao cadastrar seu email")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-white">Receba Novidades da FURIA</CardTitle>
        <CardDescription className="text-zinc-400">
          Cadastre-se para receber notícias, calendário de jogos e conteúdo exclusivo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <CheckCircle className="h-12 w-12 text-white mb-4" />
            <p className="text-white text-lg font-medium">Cadastro realizado com sucesso!</p>
            <p className="text-zinc-400 mt-2">Obrigado por se inscrever. Em breve você receberá novidades da FURIA.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-zinc-800 bg-zinc-800 focus-visible:ring-white/50"
                disabled={isLoading}
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
      <CardFooter className="border-t border-zinc-800 text-xs text-zinc-500">
        <p>Não enviamos spam. Você pode cancelar a inscrição a qualquer momento.</p>
      </CardFooter>
    </Card>
  )
}
