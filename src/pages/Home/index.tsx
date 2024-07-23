import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import { IonPage, IonContent } from "@ionic/react";

import { store } from "../../store";

import { Header, Footer, CarouselWrapper } from "../../components";

import "./grid.css";

export function Home() {
  const { currentPage } = useSnapshot(store);

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  function goFullscreen() {
    AndroidFullScreen.isImmersiveModeSupported()
      .then(() => AndroidFullScreen.immersiveMode())
      .catch(console.warn);
  }

  return (
    <IonPage>
      <IonContent>
        <main onClick={() => goFullscreen()}>
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
