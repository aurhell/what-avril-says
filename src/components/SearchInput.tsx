type SearchInputProps = {
  inputValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput(props: SearchInputProps) {
  return (
    <input
      type="text"
      className="h-10 p-4 w-4/5 text-2xl text-slate-800 font-handwrite rounded"
      placeholder="Rechercher..."
      value={props.inputValue}
      onChange={props.handleChange}
    />
  )
}
