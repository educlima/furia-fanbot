"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark")

  // Inicializar o tema com base na preferência do usuário
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("light-theme", savedTheme === "light")
  }, [])

  // Alternar entre temas claro e escuro
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light-theme", newTheme === "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-white hover:bg-zinc-800"
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
