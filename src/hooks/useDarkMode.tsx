"use client"
import { useEffect, useState } from "react"

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true) // default dark

    useEffect(() => {
        const stored = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const dark = stored ? stored === "dark" : prefersDark ?? true

        setIsDarkMode(dark)
        document.documentElement.classList.toggle("dark", dark)
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const next = !prev
            document.documentElement.classList.toggle("dark", next)
            localStorage.setItem("theme", next ? "dark" : "light")
            return next
        })
    }

    return { isDarkMode, toggleDarkMode }
}