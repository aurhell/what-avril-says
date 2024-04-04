type DicoProps = {
  words: { avril: string; translation: string }[]
}

export default function Dico({ words }: DicoProps) {
  return (
    <>
      <ul className="text-2xl lg:text-4xl text-slate-100 ">
        {
          words.map(({ avril, translation }: { avril: string; translation: string }) => (
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

      { words.length === 0 && (
        <span className="text-center text-3xl text-slate-100 px-2">
          Avril ne connait pas ce mot
        </span>
      ) }
    </>
  )
}
