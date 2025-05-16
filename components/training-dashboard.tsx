"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Plus, Upload, Download, BarChart2, MessageSquare, Database, RefreshCw } from "lucide-react"
import { furiaKnowledgeBase } from "@/lib/furia-knowledge-base"
import { ScrollArea } from "@/components/ui/scroll-area"

// Esta é uma interface de administração para "treinar" o chatbot
// Em um cenário real, isso seria conectado a um backend para salvar os dados

export default function TrainingDashboard() {
  const [activeTab, setActiveTab] = useState("knowledge")
  const [isLoading, setIsLoading] = useState(false)
  const [newEntry, setNewEntry] = useState({ key: "", value: "" })
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" })
  const [message, setMessage] = useState("")
  const [selectedGame, setSelectedGame] = useState("csgo")
  const [chatHistory, setChatHistory] = useState([
    { role: "user", content: "Quem são os jogadores atuais do time de CS:GO?" },
    {
      role: "assistant",
      content:
        "O atual elenco de CS:GO da FURIA inclui Caído (Gabriel Toledo), yuurih (Yuri Santos), KSCERATO (Kaike Cerato), YEKINDAR (Mareks Gaļinskis), Molodoy (Danil Golubenko), com chelo (Marcelo Céspedes) e caveiras (Felipe Medeiros) completando o elenco. O treinador principal é Sid 'Sidde' Macedo.",
    },
    { role: "user", content: "Quando será o próximo jogo da FURIA?" },
    {
      role: "assistant",
      content:
        "O próximo jogo da FURIA CS:GO será contra Team Liquid pela ESL Pro League Season 19 no dia 15/05/2025 às 15:00. Também temos jogos agendados contra NAVI no BLAST Premier Spring Finals em 20/05/2025 e nosso time de VALORANT enfrentará Sentinels pelo VCT Americas em 18/05/2025.",
    },
  ])
  const [feedbackData, setFeedbackData] = useState({
    totalQueries: 1458,
    positiveRating: 92,
    topQuestions: [
      { question: "Quem são os jogadores atuais do time de CS:GO?", count: 245 },
      { question: "Quando será o próximo jogo da FURIA?", count: 187 },
      { question: "Quais foram as maiores conquistas da FURIA?", count: 156 },
      { question: "Quem é o Caído?", count: 132 },
      { question: "Quando a FURIA foi fundada?", count: 98 },
    ],
    improvementAreas: [
      { area: "Informações sobre jogos futuros", score: 78 },
      { area: "Detalhes sobre jogadores de VALORANT", score: 82 },
      { area: "Estatísticas de jogadores", score: 85 },
    ],
  })

  // Simulação de adição de conhecimento
  const handleAddKnowledge = () => {
    if (!newEntry.key || !newEntry.value) return

    setIsLoading(true)

    // Simulação de processamento
    setTimeout(() => {
      setIsLoading(false)
      setMessage("Conhecimento adicionado com sucesso!")
      setNewEntry({ key: "", value: "" })

      // Em um cenário real, isso seria salvo em um banco de dados
      setTimeout(() => setMessage(""), 3000)
    }, 1500)
  }

  // Simulação de adição de FAQ
  const handleAddFaq = () => {
    if (!newFaq.question || !newFaq.answer) return

    setIsLoading(true)

    // Simulação de processamento
    setTimeout(() => {
      setIsLoading(false)
      setMessage("FAQ adicionado com sucesso!")
      setNewFaq({ question: "", answer: "" })

      // Em um cenário real, isso seria salvo em um banco de dados
      setTimeout(() => setMessage(""), 3000)
    }, 1500)
  }

  // Simulação de treinamento do modelo
  const handleTrainModel = () => {
    setIsLoading(true)

    // Simulação de processamento
    setTimeout(() => {
      setIsLoading(false)
      setMessage("Modelo treinado com sucesso! O chatbot agora está atualizado com as novas informações.")

      // Em um cenário real, isso atualizaria o modelo ou a base de conhecimento
      setTimeout(() => setMessage(""), 5000)
    }, 3000)
  }

  // Simulação de importação de dados
  const handleImportData = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setMessage("Dados importados com sucesso! A base de conhecimento foi atualizada.")
      setTimeout(() => setMessage(""), 3000)
    }, 2000)
  }

  // Simulação de exportação de dados
  const handleExportData = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setMessage("Dados exportados com sucesso! O arquivo foi baixado.")
      setTimeout(() => setMessage(""), 3000)
    }, 1500)
  }

  return (
    <Card className="w-full max-w-4xl border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-white">Painel de Treinamento do Chatbot FURIA</CardTitle>
        <CardDescription className="text-zinc-400">
          Adicione ou modifique informações para melhorar as respostas do chatbot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="knowledge" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-zinc-800 border-zinc-700 mb-4">
            <TabsTrigger value="knowledge">Base de Conhecimento</TabsTrigger>
            <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
            <TabsTrigger value="chat-history">Histórico de Chat</TabsTrigger>
            <TabsTrigger value="analytics">Análise de Desempenho</TabsTrigger>
            <TabsTrigger value="training">Treinamento</TabsTrigger>
          </TabsList>

          <TabsContent value="knowledge" className="space-y-4">
            <div className="grid gap-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="game-select">Selecionar Modalidade</Label>
                  <select
                    id="game-select"
                    className="w-full mt-1 p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white"
                    value={selectedGame}
                    onChange={(e) => setSelectedGame(e.target.value)}
                  >
                    <option value="csgo">CS:GO</option>
                    <option value="valorant">VALORANT</option>
                    <option value="lol">League of Legends</option>
                    <option value="organization">Organização</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleImportData} className="bg-zinc-800 text-white hover:bg-zinc-700 mt-8">
                    <Upload className="mr-2 h-4 w-4" />
                    Importar
                  </Button>
                  <Button onClick={handleExportData} className="bg-zinc-800 text-white hover:bg-zinc-700 mt-8">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="key">Chave de Conhecimento</Label>
                <Input
                  id="key"
                  placeholder="Ex: csgo.players.caido.description"
                  value={newEntry.key}
                  onChange={(e) => setNewEntry({ ...newEntry, key: e.target.value })}
                  className="border-zinc-700 bg-zinc-800"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="value">Valor</Label>
                <Textarea
                  id="value"
                  placeholder="Informação que será adicionada à base de conhecimento"
                  value={newEntry.value}
                  onChange={(e) => setNewEntry({ ...newEntry, value: e.target.value })}
                  className="min-h-[100px] border-zinc-700 bg-zinc-800"
                />
              </div>
              <Button
                onClick={handleAddKnowledge}
                disabled={isLoading || !newEntry.key || !newEntry.value}
                className="bg-white text-black hover:bg-zinc-200"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
                Adicionar Conhecimento
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-white mb-2">Conhecimento Atual ({selectedGame})</h3>
              <div className="border border-zinc-700 rounded-md p-4 bg-zinc-800 max-h-[300px] overflow-y-auto">
                <pre className="text-xs text-zinc-400 whitespace-pre-wrap">
                  {selectedGame === "csgo" && JSON.stringify(furiaKnowledgeBase.csgo.currentRoster[0], null, 2)}
                  {selectedGame === "valorant" && JSON.stringify(furiaKnowledgeBase.valorant.currentRoster[0], null, 2)}
                  {selectedGame === "lol" && JSON.stringify(furiaKnowledgeBase.lol.currentRoster[0], null, 2)}
                  {selectedGame === "organization" && JSON.stringify(furiaKnowledgeBase.organization, null, 2)}
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="question">Pergunta</Label>
                <Input
                  id="question"
                  placeholder="Ex: Quem é o capitão da FURIA CS:GO?"
                  value={newFaq.question}
                  onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                  className="border-zinc-700 bg-zinc-800"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="answer">Resposta</Label>
                <Textarea
                  id="answer"
                  placeholder="Resposta para a pergunta"
                  value={newFaq.answer}
                  onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                  className="min-h-[100px] border-zinc-700 bg-zinc-800"
                />
              </div>
              <Button
                onClick={handleAddFaq}
                disabled={isLoading || !newFaq.question || !newFaq.answer}
                className="bg-white text-black hover:bg-zinc-200"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
                Adicionar FAQ
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-white mb-2">FAQs Atuais</h3>
              <div className="space-y-4">
                {furiaKnowledgeBase.faq.slice(0, 5).map((faq, index) => (
                  <div key={index} className="border border-zinc-700 rounded-md p-4 bg-zinc-800">
                    <h4 className="font-medium text-white">{faq.question}</h4>
                    <p className="text-zinc-400 mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chat-history" className="space-y-4">
            <div className="border border-zinc-700 rounded-md p-4 bg-zinc-800">
              <h3 className="text-lg font-medium text-white mb-4">Histórico de Conversas</h3>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {chatHistory.map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        message.role === "user" ? "bg-zinc-700 ml-auto max-w-[80%]" : "bg-zinc-900 max-w-[80%]"
                      }`}
                    >
                      <p className="text-xs text-zinc-500 mb-1">{message.role === "user" ? "Usuário" : "Assistente"}</p>
                      <p className="text-white">{message.content}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="mt-4 flex justify-between">
                <Button className="bg-zinc-700 text-white hover:bg-zinc-600">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Exportar Conversas
                </Button>
                <Button className="bg-zinc-700 text-white hover:bg-zinc-600">
                  <Database className="mr-2 h-4 w-4" />
                  Usar para Treinamento
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Estatísticas Gerais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Total de Consultas:</span>
                      <span className="text-white font-bold">{feedbackData.totalQueries}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Avaliação Positiva:</span>
                      <span className="text-white font-bold">{feedbackData.positiveRating}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Última Atualização:</span>
                      <span className="text-white font-bold">12/05/2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Áreas para Melhoria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {feedbackData.improvementAreas.map((area, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">{area.area}</span>
                          <span className="text-white">{area.score}%</span>
                        </div>
                        <div className="w-full bg-zinc-700 rounded-full h-2">
                          <div className="bg-white h-2 rounded-full" style={{ width: `${area.score}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Perguntas Mais Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedbackData.topQuestions.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-zinc-400">{item.question}</span>
                      <span className="text-white font-bold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-zinc-700 text-white hover:bg-zinc-600">
                <BarChart2 className="mr-2 h-4 w-4" />
                Relatório Completo
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800">
              <h3 className="text-lg font-medium text-white mb-4">Treinamento do Modelo</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-zinc-900 rounded-md">
                  <input type="checkbox" id="use-faq" className="rounded border-zinc-700" checked />
                  <label htmlFor="use-faq" className="text-white">
                    Usar FAQs para treinamento
                  </label>
                </div>
                <div className="flex items-center gap-2 p-3 bg-zinc-900 rounded-md">
                  <input type="checkbox" id="use-knowledge" className="rounded border-zinc-700" checked />
                  <label htmlFor="use-knowledge" className="text-white">
                    Usar base de conhecimento
                  </label>
                </div>
                <div className="flex items-center gap-2 p-3 bg-zinc-900 rounded-md">
                  <input type="checkbox" id="use-chat" className="rounded border-zinc-700" checked />
                  <label htmlFor="use-chat" className="text-white">
                    Usar histórico de conversas
                  </label>
                </div>
                <div className="flex items-center gap-2 p-3 bg-zinc-900 rounded-md">
                  <input type="checkbox" id="use-feedback" className="rounded border-zinc-700" checked />
                  <label htmlFor="use-feedback" className="text-white">
                    Usar feedback dos usuários
                  </label>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={handleTrainModel}
                  disabled={isLoading}
                  className="bg-white text-black hover:bg-zinc-200"
                  size="lg"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="mr-2 h-4 w-4" />
                  )}
                  Treinar Modelo
                </Button>
              </div>
            </div>

            <div className="border border-zinc-700 rounded-md p-6 bg-zinc-800">
              <h3 className="text-lg font-medium text-white mb-4">Agendamento de Treinamento</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="frequency">Frequência</Label>
                    <select
                      id="frequency"
                      className="w-full mt-1 p-2 rounded-md border border-zinc-700 bg-zinc-900 text-white"
                    >
                      <option value="daily">Diário</option>
                      <option value="weekly" selected>
                        Semanal
                      </option>
                      <option value="monthly">Mensal</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="day">Dia da Semana</Label>
                    <select
                      id="day"
                      className="w-full mt-1 p-2 rounded-md border border-zinc-700 bg-zinc-900 text-white"
                    >
                      <option value="1">Segunda-feira</option>
                      <option value="2">Terça-feira</option>
                      <option value="3" selected>
                        Quarta-feira
                      </option>
                      <option value="4">Quinta-feira</option>
                      <option value="5">Sexta-feira</option>
                      <option value="6">Sábado</option>
                      <option value="0">Domingo</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="time">Horário</Label>
                  <Input id="time" type="time" defaultValue="03:00" className="border-zinc-700 bg-zinc-900" />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-white text-black hover:bg-zinc-200">Salvar Agendamento</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {message && <div className="mt-4 p-3 bg-white/10 border border-white/20 rounded-md text-white">{message}</div>}
      </CardContent>
      <CardFooter className="border-t border-zinc-800 flex justify-between">
        <p className="text-sm text-zinc-400">
          Este painel é apenas uma demonstração. Em um ambiente de produção, as alterações seriam salvas em um banco de
          dados e o modelo seria treinado automaticamente.
        </p>
      </CardFooter>
    </Card>
  )
}
