import { useMemo, useState } from 'react'

import Search from './components/SearchInput'
import Dico from './components/Dico'
import { useDico } from './hooks/useDico'

function App() {
  const [search, setSearch] = useState('')
  const words = useDico()

  function handleChange(e: { target: { value: string } }) {
    setSearch(e.target.value)
  }

  const visibleWords = useMemo(() => {
    function getFilteredTerms(search: string) {
      return words.filter(({ avril, translation }) => {
        return avril.toLowerCase().includes(search.toLowerCase()) ||
          translation.toLowerCase().includes(search.toLowerCase())
      })
    }

    return getFilteredTerms(search)
  }, [search, words])

  return (
    <div className="font-handwrite flex justify-center h-min-screen w-screen overflow-x-hidden bg-gradient-to-r from-lime-600 via-emerald-700 to-emerald-700">
      <div className="flex flex-col items-center justify-start w-full min-h-screen">
        <div className="bg-[url('/title.png')] bg-cover bg-center bg-no-repeat w-[560px] h-[445px] relative">
          <h1 className="text-4xl font-bold absolute text-slate-100 text-center w-full top-[275px]">
          Le dico d&apos;Avril
          </h1>
        </div>

        <div className="flex flex-col flex-grow relative">
          <div className="text-center py-4">
            <Search
              inputValue={search}
              handleChange={handleChange}
            />
          </div>

          <Dico words={visibleWords} />

          <img src="/banana-stickers.png" className="hidden sm:block lg:hidden absolute bottom-0 -left-32 h-32" />
        </div>

        <span className="text-xs text-green-800 mt-4 py-4">
          <a href="https://fr.freepik.com/vecteurs-libre/ensemble-personnage-dessin-anime-mignon-argent_39207557.htm#fromView=search&page=1&position=15&uuid=966747e3-17fc-44a4-ba7e-7b73401b18de">Image de brgfx</a> sur Freepik
        </span>
      </div>

      <img src="/branch.png" className="hidden md:block absolute bottom-0 -left-4" />

      <img src="/branch.png" className="hidden md:block absolute top-72 -right-1 scale-x-[-1]" />
    </div>
  )
}

export default App
