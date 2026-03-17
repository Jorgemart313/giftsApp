interface Props {
  placeholder: string;
}

export default function SearchBar({ placeholder = "Buscar" }: Props) {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder}></input>
      <button>Buscar</button>
    </div>
  );
}
