import { useEffect, useState } from 'react'

import raw from '../dico.txt'

export type DicoEntry = {
  avril: string
  translation: string
}

export function useDico() {
  const [words, setWords] = useState<DicoEntry[]>([])

  useEffect(() => {
    async function fetchDico() {
      const fetchText = await fetch(raw)
      const rawDico = await fetchText.text()
      const words = rawDico.split('\n').slice(0, -1).map(line => {
        const [avril, translation] = line.split('=')
        return { avril, translation }
      })
      setWords(words)
    }

    fetchDico()
  }, [])

  return words
}
