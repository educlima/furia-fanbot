"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"

// Dados simulados de jogos
const gameSchedule = {
  upcoming: [
    {
      id: 1,
      opponent: "Team Liquid",
      game: "CS:GO",
      event: "ESL Pro League",
      date: "15/05/2025",
      time: "15:00",
      logo: "/placeholder.svg?height=60&width=60&text=TL",
    },
    {
      id: 2,
      opponent: "NAVI",
      game: "CS:GO",
      event: "BLAST Premier",
      date: "20/05/2025",
      time: "13:30",
      logo: "/placeholder.svg?height=60&width=60&text=NAVI",
    },
    {
      id: 3,
      opponent: "Sentinels",
      game: "VALORANT",
      event: "VCT Americas",
      date: "18/05/2025",
      time: "19:00",
      logo: "/placeholder.svg?height=60&width=60&text=SEN",
    },
  ],
  past: [
    {
      id: 4,
      opponent: "Cloud9",
      game: "CS:GO",
      event: "ESL Pro League",
      date: "05/05/2025",
      time: "15:00",
      result: "Vitória (16-12, 16-14)",
      logo: "/placeholder.svg?height=60&width=60&text=C9",
    },
    {
      id: 5,
      opponent: "FaZe Clan",
      game: "CS:GO",
      event: "BLAST Premier",
      date: "01/05/2025",
      time: "13:30",
      result: "Derrota (13-16, 10-16)",
      logo: "/placeholder.svg?height=60&width=60&text=FaZe",
    },
    {
      id: 6,
      opponent: "100 Thieves",
      game: "VALORANT",
      event: "VCT Americas",
      date: "03/05/2025",
      time: "19:00",
      result: "Vitória (13-7, 13-10)",
      logo: "/placeholder.svg?height=60&width=60&text=100T",
    },
  ],
}

export default function GameSchedule() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <Card className="w-full border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-white">Calendário de Jogos</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-zinc-800 border-zinc-700 mb-4 w-full">
            <TabsTrigger
              value="upcoming"
              className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Próximos Jogos
            </TabsTrigger>
            <TabsTrigger value="past" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black">
              Resultados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {gameSchedule.upcoming.map((game) => (
              <Card key={game.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Image src="/furia-logo.png" alt="FURIA" width={50} height={50} className="object-contain" />
                      <div className="flex flex-col">
                        <span className="font-bold text-white">FURIA</span>
                        <span className="text-xs text-zinc-400">{game.game}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-xs text-zinc-400">{game.event}</span>
                      <span className="text-lg font-bold text-white">VS</span>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <Calendar className="h-3 w-3" />
                        <span>{game.date}</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>{game.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-white">{game.opponent}</span>
                        <span className="text-xs text-zinc-400">{game.game}</span>
                      </div>
                      <Image
                        src={game.logo || "/placeholder.svg"}
                        alt={game.opponent}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {gameSchedule.past.map((game) => (
              <Card key={game.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Image src="/furia-logo.png" alt="FURIA" width={50} height={50} className="object-contain" />
                      <div className="flex flex-col">
                        <span className="font-bold text-white">FURIA</span>
                        <span className="text-xs text-zinc-400">{game.game}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-xs text-zinc-400">{game.event}</span>
                      <span
                        className={`text-sm font-bold ${game.result?.includes("Vitória") ? "text-green-500" : "text-red-500"}`}
                      >
                        {game.result}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <Calendar className="h-3 w-3" />
                        <span>{game.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-white">{game.opponent}</span>
                        <span className="text-xs text-zinc-400">{game.game}</span>
                      </div>
                      <Image
                        src={game.logo || "/placeholder.svg"}
                        alt={game.opponent}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
