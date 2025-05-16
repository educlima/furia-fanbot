import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    // Versão de demonstração que simula uma resposta
    const { messages } = await req.json()
    
    // Simulando uma resposta para demonstração
    return NextResponse.json({
      role: "assistant",
      content: "Esta é uma versão de demonstração do chatbot FURIA. A API real não está sendo chamada.",
      id: Date.now().toString()
    })
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json({ error: "Erro ao processar a mensagem" }, { status: 500 })
  }
}