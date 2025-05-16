"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="border-zinc-800 bg-black p-0">
          <SheetHeader className="border-b border-zinc-800 p-6">
            <SheetTitle className="flex items-center gap-2 text-white">
              <Image src="/furia-logo.png" alt="FURIA Logo" width={32} height={32} className="object-contain" />
              <span>FURIA Fans</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-6">
            <nav className="flex flex-col space-y-6">
              <Link
                href="#sobre"
                className="text-lg font-medium text-white hover:text-zinc-400 transition-colors"
                onClick={handleLinkClick}
              >
                Sobre
              </Link>
              <Link
                href="/times"
                className="text-lg font-medium text-white hover:text-zinc-400 transition-colors"
                onClick={handleLinkClick}
              >
                Times
              </Link>
              <Link
                href="#jogos"
                className="text-lg font-medium text-white hover:text-zinc-400 transition-colors"
                onClick={handleLinkClick}
              >
                Jogos
              </Link>
              <Link
                href="#noticias"
                className="text-lg font-medium text-white hover:text-zinc-400 transition-colors"
                onClick={handleLinkClick}
              >
                Notícias
              </Link>
              <div className="pt-6 border-t border-zinc-800">
                <Button className="w-full bg-white text-black hover:bg-zinc-200">Loja Oficial</Button>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
