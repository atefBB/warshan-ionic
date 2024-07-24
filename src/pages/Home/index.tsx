import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { IonPage, IonContent } from "@ionic/react";

import { store } from "../../store";

import { Header, Footer, CarouselWrapper } from "../../components";

import "./grid.css";

export function Home() {
  const { currentPage } = useSnapshot(store);

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  return (
    <IonPage>
      <IonContent>
        <main>
          <div className="container">
            <Header />
            <CarouselWrapper />
            <Footer />
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
}
