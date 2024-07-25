import { IonHeader, IonPage, IonToolbar } from "@ionic/react";
import { IonContent, IonItem, IonSearchbar } from "@ionic/react";
import { useState } from "react";
import { useSnapshot } from "valtio";

import { setCurrentPage, store } from "../../store";

import { Result, searchVerses } from "../../helpers";

import "./styles.css";

export function Search({ history }: any) {
  const { currentPage } = useSnapshot(store);

  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [isSearchNumber, setIsSearchNumber] = useState<boolean>(false);

  function goToPage(page: number) {
    setCurrentPage(page);
    history.push("/");
  }

  function search(value: string) {
    if (value !== "") {
      const isValueNumber = Number.isInteger(Number(value));
      setIsSearchNumber(isValueNumber);

      if (isValueNumber) {
        setCurrentPage(Number(value));
      } else {
        const results = searchVerses(value);
        setSearchResults(results);
      }
    }
  }

  return (
    <IonPage style={{ direction: "rtl" }}>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonSearchbar
            class="custom-search-bar"
            animated={true}
            placeholder="بحث"
            onIonChange={(event) => search(event.target.value!)}
            onIonClear={() => {
              setIsSearchNumber(false);
              setSearchResults([]);
            }}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {searchResults.length > 0
          ? searchResults.map(({ surah, verse }) => {
              return (
                <IonItem
                  key={`${surah.id}-${verse.number}`}
                  onClick={() => goToPage(verse.page)}
                >
                  {"سورة "}
                  {surah.name}: {verse.text}
                </IonItem>
              );
            })
          : null}
        {isSearchNumber === true ? (
          <IonItem onClick={() => history.push("/")}>
            {"الذهاب إلى الصفحة "}
            {currentPage}
          </IonItem>
        ) : null}
      </IonContent>
    </IonPage>
  );
}
