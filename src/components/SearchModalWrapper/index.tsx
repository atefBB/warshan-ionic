import { IonPage } from "@ionic/react";

import { Search } from "../Search";

type IndexModalWrapperProps = {
  dismiss: (data?: string | null | undefined | number, role?: string) => void;
};

export function SearchModalWrapper({ dismiss }: IndexModalWrapperProps) {
  return (
    <IonPage style={{ direction: "rtl" }}>
      <Search closeModal={dismiss} />
    </IonPage>
  );
}
