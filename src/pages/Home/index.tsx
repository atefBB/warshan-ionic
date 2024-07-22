import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import { IonPage, IonContent } from "@ionic/react";

import { store } from "../../store";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SwiperWrapper } from "../../components/SwiperWrapper";

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
            <SwiperWrapper />
            <Footer />
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
}
