import { useState } from "react";

type BookmarkPropsType = {
  currentPage: number;
};

export function Bookmark({ currentPage }: BookmarkPropsType) {
  const [markedPages, setMarkedPages] = useState<number[]>([]);

  function markPage() {
    if (!markedPages.includes(currentPage)) {
      setMarkedPages([...markedPages, currentPage]);
    }
  }

  return (
    <section style={{ display: "none" }}>
      <button onClick={markPage} disabled={markedPages.includes(currentPage)}>
        Mark Page
      </button>
      <div>
        <h4>Marked Pages</h4>
        <ul>
          {markedPages.map((page) => (
            <li key={page}>Page {page + 1}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
