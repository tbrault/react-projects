import { ChangeEventHandler } from "react";

function Search({
  search,
  onSearch,
}: {
  search: string;
  onSearch: ChangeEventHandler<HTMLInputElement>;
}): JSX.Element {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </>
  );
}

export default Search;
