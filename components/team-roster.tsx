"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Flag, Users } from "lucide-react"
import { furiaPlayers, furiaCoaches } from "@/lib/furia-data"

export default function TeamRoster() {
  const [activeTab, setActiveTab] = useState("csgo")

  return (
    <Card className="w-full border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-white">Elenco Atual da FURIA</CardTitle>
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
            <TabsTrigger value="lol" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black">
              League of Legends
            </TabsTrigger>
          </TabsList>

          {/* CS:GO Roster */}
          <TabsContent value="csgo" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {furiaPlayers.csgo.map((player, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-3"
                    />
                    <h3 className="font-bold text-white text-center">{player.name.split(" (")[0]}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Flag className="h-3 w-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{player.nationality}</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{player.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coach Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" /> Comissão Técnica
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={furiaCoaches.csgo.head.image || "/placeholder.svg"}
                      alt={furiaCoaches.csgo.head.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-3"
                    />
                    <h3 className="font-bold text-white">{furiaCoaches.csgo.head.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Flag className="h-3 w-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{furiaCoaches.csgo.head.nationality}</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{furiaCoaches.csgo.head.role}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* VALORANT Roster */}
          <TabsContent value="valorant" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {furiaPlayers.valorant.map((player, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-3"
                    />
                    <h3 className="font-bold text-white text-center">{player.name.split(" (")[0]}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Flag className="h-3 w-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{player.nationality}</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{player.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coach Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" /> Comissão Técnica
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={furiaCoaches.valorant.head.image || "/placeholder.svg"}
                      alt={furiaCoaches.valorant.head.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-3"
                    />
                    <h3 className="font-bold text-white">{furiaCoaches.valorant.head.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Flag className="h-3 w-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{furiaCoaches.valorant.head.nationality}</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{furiaCoaches.valorant.head.role}</p>
                  </CardContent>
                </Card>
                {furiaCoaches.valorant.assistants.map((coach, index) => (
                  <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                    <CardContent className="p-4 flex flex-col items-center">
                      <Image
                        src={coach.image || "/placeholder.svg"}
                        alt={coach.name}
                        width={100}
                        height={100}
                        className="rounded-full mb-3"
                      />
                      <h3 className="font-bold text-white">{coach.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Flag className="h-3 w-3 text-zinc-400" />
                        <p className="text-xs text-zinc-400">{coach.nationality}</p>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{coach.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* League of Legends Roster */}
          <TabsContent value="lol" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {furiaPlayers.lol.map((player, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-3"
                    />
                    <h3 className="font-bold text-white text-center">{player.name.split(" (")[0]}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Flag className="h-3 w-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{player.nationality}</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{player.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coach Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" /> Comissão Técnica
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      src={furiaCoaches.lol.head.image || "/placeholder.svg"}
                      alt={furiaCoaches.lol.head.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-3"
                    />
                    <h3 className="font-bold text-white">{furiaCoaches.lol.head.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Flag className="h-3 w-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{furiaCoaches.lol.head.nationality}</p>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{furiaCoaches.lol.head.role}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
