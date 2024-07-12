import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
// @ts-ignore
import { getSuraList } from "@kmaslesa/quran-metadata";

type IndexModalWrapperProps = {
  dismiss: (data?: string | null | undefined | number, role?: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export function IndexModalWrapper({
  dismiss,
  setCurrentPage,
}: IndexModalWrapperProps) {
  const chapters = getSuraList();

  return (
    <IonPage style={{ direction: "rtl" }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonIcon
              icon={closeOutline}
              onClick={() => dismiss(null, "cancel")}
            />
          </IonButtons>
          <IonTitle>فهرس السور</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {chapters.map(({ index, startPage, name }: Record<string, any>) => (
          <IonItem
            key={index}
            onClick={() => {
              setCurrentPage(startPage !== undefined ? startPage : index);
              dismiss(null, "cancel");
            }}
          >
            <strong>{name.arabic}</strong>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
}
