import dico from './dico.json'

function App() {
  return (
    <div className="flex justify-center h-min-screen w-screen overflow-x-hidden bg-gradient-to-r from-lime-600 via-emerald-700 to-emerald-700">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="bg-[url('/title.png')] bg-cover bg-center bg-no-repeat w-[560px] h-[445px] relative">
          <h1 className="text-4xl font-bold absolute text-slate-100 font-handwrite text-center w-full top-[275px]">
          Le dico d&apos;Avril
          </h1>
        </div>

        <div className="flex flex-grow relative">
          <ul className="text-2xl lg:text-4xl text-slate-100 font-handwrite">
            {
              dico.map(({ avril, translation }) => (
                <li key={avril} className="flex flex-row justify-center m-4">
                  <h2>
                    {/* &quot;{avril}&quot; */}
                    {avril}
                  </h2>
                  <span className="mx-2">=</span>
                  <h2>{translation}</h2>
                </li>
              ))
            }
          </ul>

          <img src="/banana-stickers.png" className="hidden sm:block lg:hidden absolute bottom-0 -left-32 h-32" />
        </div>

        <span className="text-xs text-green-800 mt-4 py-4">
          <a href="https://fr.freepik.com/vecteurs-libre/ensemble-personnage-dessin-anime-mignon-argent_39207557.htm#fromView=search&page=1&position=15&uuid=966747e3-17fc-44a4-ba7e-7b73401b18de">Image de brgfx</a> sur Freepik
        </span>
      </div>

      <img src="/branch.png" className="hidden md:block absolute -bottom-10 -left-4" />

      <img src="/branch.png" className="hidden md:block absolute top-80 -right-4 scale-x-[-1]" />
    </div>
  )
}

export default App
