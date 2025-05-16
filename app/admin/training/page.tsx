import type { Metadata } from "next"
import TrainingDashboard from "@/components/training-dashboard"

export const metadata: Metadata = {
  title: "FURIA Fans - Painel de Treinamento",
  description: "Painel de administração para treinamento do chatbot da FURIA",
}

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
              Painel de Treinamento Avançado
            </h1>
            <p className="max-w-[600px] text-zinc-400 md:text-lg">
              Use este painel para treinar o chatbot da FURIA com novas informações, analisar seu desempenho e melhorar
              suas respostas.
            </p>
          </div>

          <div className="flex justify-center">
            <TrainingDashboard />
          </div>
        </div>
      </main>
    </div>
  )
}
