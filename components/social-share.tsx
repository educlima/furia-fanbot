"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function SocialShare() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = "FURIA Fans Chatbot - Seu assistente virtual para tudo sobre a FURIA Esports"

  const handleShare = (platform: string) => {
    let shareLink = ""

    switch (platform) {
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
        break
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case "copy":
        navigator.clipboard.writeText(shareUrl)
        toast({
          title: "Link copiado!",
          description: "O link foi copiado para a área de transferência.",
        })
        return
      default:
        return
    }

    window.open(shareLink, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-medium text-white">Compartilhar</h3>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="border-zinc-700 hover:bg-zinc-800"
          onClick={() => handleShare("twitter")}
          aria-label="Compartilhar no Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-zinc-700 hover:bg-zinc-800"
          onClick={() => handleShare("facebook")}
          aria-label="Compartilhar no Facebook"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-zinc-700 hover:bg-zinc-800"
          onClick={() => handleShare("linkedin")}
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-zinc-700 hover:bg-zinc-800"
          onClick={() => handleShare("copy")}
          aria-label="Copiar link"
        >
          <Link2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
