import { useState } from "react";

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);

  function setCurrentPage(page: number) {
    // @todo
    console.log({ page });
  }

  function handleSearch() {
    // @todo
    setSearchResults([]);
  }

  return (
    <section style={{ display: "none" }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h4>Search Results</h4>
        <ul>
          {searchResults.map((page) => (
            <li key={page} onClick={() => setCurrentPage(page)}>
              Page {page + 1}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
