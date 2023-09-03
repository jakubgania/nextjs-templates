'use client'

import { useEffect, useState } from "react"

export default function WordChanger() {
  
  const words = [
    'first setence',
    'second sentence',
    'third sentence',
    'fourth sentence',
    'fifth sentence'
  ]
  
  const [word, setWord] = useState(words[0])
  let wordsCounter = 0

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordsCounter === words.length) {
        wordsCounter = 0
      }

      setWord(words[wordsCounter])
      wordsCounter++
    }, 1400)

    return () => clearInterval(interval)
  }, []);

  return (
    <span className="lg:text-3xl md:text-2xl text-xl md:font-black font-bold tracking-wide">{word}</span>
  )
}