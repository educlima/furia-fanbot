import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Trophy, Users } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import ChatInterface from "@/components/chat-interface"
import MobileNav from "@/components/mobile-nav"
import ScrollToTop from "@/components/scroll-to-top"
import ThemeToggle from "@/components/theme-toggle"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { furiaPlayers } from "@/lib/furia-data"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FURIA Fans - Chatbot",
  description: "Chatbot para fãs da FURIA Esports",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/furia-logo.png" alt="FURIA Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-white">FURIA Fans</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#sobre" className="text-sm font-medium hover:text-zinc-400 transition-colors">
              Sobre
            </Link>
            <Link href="/times" className="text-sm font-medium hover:text-zinc-400 transition-colors">
              Times
            </Link>
            <Link href="#jogos" className="text-sm font-medium hover:text-zinc-400 transition-colors">
              Jogos
            </Link>
            <Link href="#noticias" className="text-sm font-medium hover:text-zinc-400 transition-colors">
              Notícias
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:inline-flex bg-white text-black hover:bg-zinc-200">Loja Oficial</Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white ${playfair.className}`}
                  >
                    FURIA Fans Chatbot
                  </h1>
                  <p className={`max-w-[600px] text-zinc-300 md:text-xl ${playfair.className} italic`}>
                    Driven by Instinct
                  </p>
                  <p className="max-w-[600px] text-zinc-400 md:text-lg mt-4">
                    Seu assistente virtual para tudo sobre a FURIA Esports. Pergunte sobre jogadores, próximos jogos,
                    resultados e muito mais!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                    Experimente o Chat
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ChatInterface />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter md:text-4xl/tight text-white ${playfair.className}`}
                >
                  Sobre a FURIA
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed">
                  A FURIA Esports é uma organização brasileira de esportes eletrônicos fundada em 2017. Com times em
                  diversos jogos como CS:GO, VALORANT, League of Legends e mais, a FURIA se tornou uma das maiores
                  organizações de esports da América Latina.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl items-center gap-6 py-12 hidden lg:grid lg:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-white/10 p-3">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Conquistas</h3>
                  <p className="text-center text-zinc-400">
                    Múltiplos títulos internacionais e participações em Majors de CS:GO, além de conquistas em outros
                    jogos.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-white/10 p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Jogadores</h3>
                  <p className="text-center text-zinc-400">
                    Talentos brasileiros e internacionais que representam a FURIA nas maiores competições do mundo.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-white/10 p-3">
                    <CalendarDays className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Competições</h3>
                  <p className="text-center text-zinc-400">
                    Participação nas principais ligas e torneios de esports ao redor do mundo.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Carrossel para dispositivos móveis e tablets */}
            <div className="mx-auto max-w-5xl py-12 lg:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <div className="rounded-full bg-white/10 p-3">
                          <Trophy className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Conquistas</h3>
                        <p className="text-center text-zinc-400">
                          Múltiplos títulos internacionais e participações em Majors de CS:GO, além de conquistas em
                          outros jogos.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <div className="rounded-full bg-white/10 p-3">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Jogadores</h3>
                        <p className="text-center text-zinc-400">
                          Talentos brasileiros e internacionais que representam a FURIA nas maiores competições do
                          mundo.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <div className="rounded-full bg-white/10 p-3">
                          <CalendarDays className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Competições</h3>
                        <p className="text-center text-zinc-400">
                          Participação nas principais ligas e torneios de esports ao redor do mundo.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-white text-black hover:bg-zinc-200" />
                <CarouselNext className="bg-white text-black hover:bg-zinc-200" />
              </Carousel>
            </div>
          </div>
        </section>

        <section id="times" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter md:text-4xl/tight text-white ${playfair.className}`}
                >
                  Nossos Times
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed">
                  A FURIA compete em diversos jogos com equipes de alto nível.
                </p>
              </div>
            </div>
            <Tabs defaultValue="csgo" className="mx-auto max-w-5xl py-12">
              <TabsList className="bg-zinc-900 border-zinc-800 w-full justify-start overflow-x-auto">
                <TabsTrigger value="csgo" className="data-[state=active]:bg-white data-[state=active]:text-black">
                  CS:GO
                </TabsTrigger>
                <TabsTrigger value="valorant" className="data-[state=active]:bg-white data-[state=active]:text-black">
                  VALORANT
                </TabsTrigger>
                <TabsTrigger value="lol" className="data-[state=active]:bg-white data-[state=active]:text-black">
                  League of Legends
                </TabsTrigger>
              </TabsList>

              <TabsContent value="csgo" className="mt-6">
                {/* Carrossel para todos os dispositivos */}
                <Carousel className="w-full">
                  <CarouselContent>
                    {furiaPlayers.csgo.map((player, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                        <Card className="bg-zinc-900 border-zinc-800">
                          <CardContent className="p-4 flex flex-col items-center">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              width={150}
                              height={150}
                              className="rounded-full mb-4"
                            />
                            <h3 className="font-bold text-white">{player.name.split(" (")[0]}</h3>
                            <p className="text-sm text-zinc-400">{player.role}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white text-black hover:bg-zinc-200" />
                  <CarouselNext className="bg-white text-black hover:bg-zinc-200" />
                </Carousel>
                <div className="flex justify-center mt-6">
                  <Button asChild className="bg-white text-black hover:bg-zinc-200">
                    <Link href="/times">Ver Elenco Completo</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="valorant" className="mt-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {furiaPlayers.valorant.map((player, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                        <Card className="bg-zinc-900 border-zinc-800">
                          <CardContent className="p-4 flex flex-col items-center">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              width={150}
                              height={150}
                              className="rounded-full mb-4"
                            />
                            <h3 className="font-bold text-white">{player.name.split(" (")[0]}</h3>
                            <p className="text-sm text-zinc-400">{player.role}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white text-black hover:bg-zinc-200" />
                  <CarouselNext className="bg-white text-black hover:bg-zinc-200" />
                </Carousel>
                <div className="flex justify-center mt-6">
                  <Button asChild className="bg-white text-black hover:bg-zinc-200">
                    <Link href="/times">Ver Elenco Completo</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="lol" className="mt-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {furiaPlayers.lol.map((player, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                        <Card className="bg-zinc-900 border-zinc-800">
                          <CardContent className="p-4 flex flex-col items-center">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              width={150}
                              height={150}
                              className="rounded-full mb-4"
                            />
                            <h3 className="font-bold text-white">{player.name.split(" (")[0]}</h3>
                            <p className="text-sm text-zinc-400">{player.role}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white text-black hover:bg-zinc-200" />
                  <CarouselNext className="bg-white text-black hover:bg-zinc-200" />
                </Carousel>
                <div className="flex justify-center mt-6">
                  <Button asChild className="bg-white text-black hover:bg-zinc-200">
                    <Link href="/times">Ver Elenco Completo</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Restante do código permanece o mesmo */}
      </main>
      <footer className="w-full border-t border-zinc-800 py-6 md:py-12 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/furia-logo.png" alt="FURIA Logo" width={40} height={40} className="object-contain" />
                <span className="text-xl font-bold text-white">FURIA Fans</span>
              </div>
              <p className="text-sm text-zinc-400">
                Projeto desenvolvido por um estudante de Engenharia de Software para os fãs da FURIA Esports.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#sobre" className="text-zinc-400 hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/times" className="text-zinc-400 hover:text-white transition-colors">
                    Times
                  </Link>
                </li>
                <li>
                  <Link href="#jogos" className="text-zinc-400 hover:text-white transition-colors">
                    Jogos
                  </Link>
                </li>
                <li>
                  <Link href="#noticias" className="text-zinc-400 hover:text-white transition-colors">
                    Notícias
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">FURIA Oficial</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://furia.gg"
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Site Oficial
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shop.furia.gg"
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Loja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Parcerias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} FURIA Fans Chatbot. Este é um projeto não oficial. Todos os direitos da
            marca FURIA pertencem aos seus respectivos proprietários.
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
