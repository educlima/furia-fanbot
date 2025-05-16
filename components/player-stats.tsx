"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados simulados de estatísticas de jogadores
const playerStats = {
  csgo: [
    {
      id: 1,
      name: "arT",
      fullName: "Andrei Piovezan",
      role: "Capitão/Entry Fragger",
      image: "/placeholder.svg?height=150&width=150&text=arT",
      stats: {
        rating: "1.15",
        kd: "1.21",
        headshots: "48.2%",
        mapsPlayed: 245,
      },
    },
    {
      id: 2,
      name: "KSCERATO",
      fullName: "Kaike Cerato",
      role: "Rifler",
      image: "/placeholder.svg?height=150&width=150&text=KSCERATO",
      stats: {
        rating: "1.24",
        kd: "1.35",
        headshots: "52.7%",
        mapsPlayed: 240,
      },
    },
    {
      id: 3,
      name: "yuurih",
      fullName: "Yuri Santos",
      role: "Rifler/Support",
      image: "/placeholder.svg?height=150&width=150&text=yuurih",
      stats: {
        rating: "1.19",
        kd: "1.28",
        headshots: "50.1%",
        mapsPlayed: 242,
      },
    },
    {
      id: 4,
      name: "saffee",
      fullName: "Rafael Costa",
      role: "AWPer",
      image: "/placeholder.svg?height=150&width=150&text=saffee",
      stats: {
        rating: "1.17",
        kd: "1.25",
        headshots: "38.5%",
        mapsPlayed: 180,
      },
    },
    {
      id: 5,
      name: "drop",
      fullName: "André Abreu",
      role: "Rifler/Support",
      image: "/placeholder.svg?height=150&width=150&text=drop",
      stats: {
        rating: "1.08",
        kd: "1.12",
        headshots: "47.3%",
        mapsPlayed: 165,
      },
    },
  ],
  valorant: [
    {
      id: 6,
      name: "Jogador 1",
      fullName: "Nome Completo",
      role: "Duelist",
      image: "/placeholder.svg?height=150&width=150&text=Jogador1",
      stats: {
        acs: "245",
        kd: "1.15",
        firstBloods: "0.85",
        mapsPlayed: 120,
      },
    },
    // Outros jogadores de VALORANT...
  ],
}

export default function PlayerStats() {
  const [activeTab, setActiveTab] = useState("csgo")
  const [selectedPlayer, setSelectedPlayer] = useState(playerStats.csgo[0])

  const handlePlayerSelect = (player: any) => {
    setSelectedPlayer(player)
  }

  return (
    <Card className="w-full border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-white">Estatísticas dos Jogadores</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="csgo" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-zinc-800 border-zinc-700 mb-4 w-full">
            <TabsTrigger value="csgo" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black">
              CS:GO
            </TabsTrigger>
            <TabsTrigger
              value="valorant"
              className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black"
            >
              VALORANT
            </TabsTrigger>
          </TabsList>

          <TabsContent value="csgo" className="space-y-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {playerStats.csgo.map((player) => (
                <div
                  key={player.id}
                  className={`cursor-pointer p-2 rounded-md transition-all ${
                    selectedPlayer.id === player.id ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                  onClick={() => handlePlayerSelect(player)}
                >
                  <Image
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <p className="text-center text-sm mt-1 font-medium">{player.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center">
                      <Image
                        src={selectedPlayer.image || "/placeholder.svg"}
                        alt={selectedPlayer.name}
                        width={150}
                        height={150}
                        className="rounded-full"
                      />
                      <h3 className="text-xl font-bold mt-3 text-white">{selectedPlayer.name}</h3>
                      <p className="text-sm text-zinc-400">{selectedPlayer.fullName}</p>
                      <p className="text-sm text-zinc-400">{selectedPlayer.role}</p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="bg-zinc-900 p-4 rounded-md">
                        <p className="text-sm text-zinc-400">Rating 2.0</p>
                        <p className="text-2xl font-bold text-white">{selectedPlayer.stats.rating}</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-md">
                        <p className="text-sm text-zinc-400">K/D Ratio</p>
                        <p className="text-2xl font-bold text-white">{selectedPlayer.stats.kd}</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-md">
                        <p className="text-sm text-zinc-400">Headshot %</p>
                        <p className="text-2xl font-bold text-white">{selectedPlayer.stats.headshots}</p>
                      </div>
                      <div className="bg-zinc-900 p-4 rounded-md">
                        <p className="text-sm text-zinc-400">Mapas Jogados</p>
                        <p className="text-2xl font-bold text-white">{selectedPlayer.stats.mapsPlayed}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="valorant" className="space-y-6">
            <div className="flex justify-center">
              <p className="text-zinc-400">Estatísticas de VALORANT em breve...</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
