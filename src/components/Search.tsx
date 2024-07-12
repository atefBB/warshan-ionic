import { IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";

type Surah = {
  id: number;
  name: string;
  name_en: string;
  name_translation: string;
  words: number;
  letters: number;
  type: string;
  type_en: string;
  ar: string;
  en: string;
  array: Array<{
    id: number;
    ar: string;
    en: string;
    filename: string;
    path: string;
    dir: string;
    size: number;
  }>;
};

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Surah[]>([]);
  const [data, setData] = useState<Surah[]>([]);

  function goToPage(page: number) {
    // @todo
    console.log({ page });
  }

  useEffect(() => {
    function getQuranData() {
      fetch("./quran.json")
        .then((response) => response.json())
        .then((rawData) => {
          setData(rawData);
        })
        .catch((error) => console.log(error.message));
    }
    getQuranData();
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      const filteredData = data.filter((item) => {
        return (
          item.name.includes(searchQuery) ||
          item.ar.includes(searchQuery) ||
          item.array.some(({ ar: verse }) => verse.includes(searchQuery))
        );
      });

      setSearchResults(filteredData);
      console.log({ filteredData, searchQuery });
    }
  }, [searchQuery]);

  return (
    <section>
      <IonSearchbar
        animated={true}
        value={searchQuery}
        placeholder="بحث"
        onIonInput={(event) => setSearchQuery(event.target.value!)}
      ></IonSearchbar>
      <div>
        <h4>Search Results</h4>
        <ul>
          {searchResults.map((page) => (
            <li key={page.id} onClick={() => goToPage(page.id)}>
              Page {page.id + 1}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
