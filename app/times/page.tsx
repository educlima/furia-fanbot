import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import TeamRoster from "@/components/team-roster"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "FURIA Fans - Times",
  description: "Conheça os times da FURIA Esports",
}

export default function TimesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/furia-logo.png" alt="FURIA Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-white">FURIA Fans</span>
          </div>
          <Button variant="ghost" size="sm" asChild className="text-white hover:bg-zinc-800">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Times da FURIA</h1>
            <p className="max-w-[600px] text-zinc-400 md:text-lg">
              Conheça os jogadores e comissão técnica dos times da FURIA Esports.
            </p>
          </div>

          <div className="space-y-12">
            <TeamRoster />
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-zinc-800 py-6 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2">
              <Image src="/furia-logo.png" alt="FURIA Logo" width={30} height={30} className="object-contain" />
              <span className="text-lg font-bold text-white">FURIA Fans</span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} FURIA Fans Chatbot. Este é um projeto não oficial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
