import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { useSnapshot } from "valtio";

import { setCurrentPage, store } from "../../store";

export function ChaptersIndex({ history }: any) {
  const { chapters } = useSnapshot(store);

  function handleClickItem(startPage: number | string) {
    setCurrentPage(Number(startPage));
    history.push("/");
  }

  return (
    <IonPage style={{ direction: "rtl" }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonIcon icon={closeOutline} onClick={() => history.push("/")} />
          </IonButtons>
          <IonTitle>فهرس السور</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {chapters.map(({ index, startPage, name }: Record<string, any>) => (
          <IonItem key={index} onClick={() => handleClickItem(startPage)}>
            <strong>{name.arabic}</strong>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
}
