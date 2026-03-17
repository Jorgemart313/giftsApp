interface Props {
  searches: string[];
}

export function PreviousSearches() {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        <li>Goku</li>
        <li>One piece</li>
        <li>Goku</li>
        <li>Gta V</li>
      </ul>
    </div>
  );
}
