"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setTheme('light')
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <div className="mb-10 dark:bg-black">
      <p className="mb-4 text-slate-600 dark:text-slate-400">
        The current theme is: <span className="text-green-500">{theme}</span>
      </p>
      <div className="flex gap-2">
        <div className="w-1/2">
          <button
            onClick={() => setTheme("light")}
            className="p-4 rounded-xl w-full text-slate-500 bg-slate-100 hover:bg-slate-200 dark:text-slate-400 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            Light mode
          </button>
        </div>
        <div className="w-1/2">
          <button
            onClick={() => setTheme("dark")}
            className="p-4 rounded-xl w-full text-slate-500 bg-slate-100 hover:bg-slate-200 dark:text-slate-400 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            Dark mode
          </button>
        </div>
      </div>
    </div>
  )
}