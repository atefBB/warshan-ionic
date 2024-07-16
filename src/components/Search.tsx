import { IonContent, IonItem, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { ArabicServices as arSrv } from "arabic-services";
// @ts-ignore
import { getSuraByIndex } from "@kmaslesa/quran-metadata";
import { useSnapshot } from "valtio";

import { store } from "../store";

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

type PropsType = {
  closeModal: (
    data?: string | null | undefined | number,
    role?: string
  ) => void;
};

export function Search({ closeModal }: PropsType) {
  const { currentPage } = useSnapshot(store);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Surah[]>([]);
  const [data, setData] = useState<Surah[]>([]);
  const [isSearchNumber, setIsSearchNumber] = useState<boolean>(false);

  function goToPage(page: number) {
    closeModal();
    store.setCurrentPage(page);
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

  function search(value: string) {
    if (value !== "") {
      const isValueNumber = Number.isInteger(Number(value));
      setIsSearchNumber(isValueNumber);

      if (isValueNumber) {
        store.setCurrentPage(Number(value));
      } else {
        return;
        setSearchQuery(value);
        const filteredData = data.filter((item) => {
          return (
            arSrv.removeTashkeel(item.name).includes(value) ||
            arSrv.removeTashkeel(item.ar).includes(value) ||
            item.array.some(({ ar: verse }) =>
              arSrv.removeTashkeel(verse).includes(value)
            )
          );
        });
        setSearchResults(filteredData);
      }
    }
  }

  return (
    <section>
      <IonSearchbar
        animated={true}
        placeholder="بحث"
        onIonInput={(event) => search(event.target.value!)}
      />
      <IonContent className="ion-padding">
        {searchResults.length > 0
          ? searchResults.map((page) => {
              const chapter = getSuraByIndex(page.id);
              const verses = page.array.filter((verse) => {
                const verseWithoutTashkeel = arSrv.removeTashkeel(verse.ar);
                const isSearchedVerse =
                  verseWithoutTashkeel.includes(searchQuery);
                return isSearchedVerse;
              });

              return verses.map((searchedVerse) => (
                <IonItem
                  key={searchedVerse.id}
                  onClick={() => goToPage(chapter.startPage)}
                >
                  {"سورة "}
                  {page.name}: {searchedVerse.ar}
                </IonItem>
              ));
            })
          : null}
        {isSearchNumber === true ? (
          <IonItem onClick={() => goToPage(currentPage)}>
            {"الذهاب إلى الصفحة "}
            {currentPage}
          </IonItem>
        ) : null}
      </IonContent>
    </section>
  );
}
