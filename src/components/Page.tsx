import { useEffect } from "react";
import { useIonModal } from "@ionic/react";
import { useSnapshot } from "valtio";

import { setCurrentPage, store } from "../store";

import { IndexModalWrapper } from "./IndexModalWrapper";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchModalWrapper } from "./SearchModalWrapper";
import { SwiperWrapper } from "./SwiperWrapper";

import "./grid.css";

export default function Page() {
  const { currentPage } = useSnapshot(store);

  const [presentIndexModal, dismissIndexModal] = useIonModal(
    IndexModalWrapper,
    {
      dismiss: (data: string, role: string) => dismissIndexModal(data, role),
      setCurrentPage,
    }
  );

  const [presentSearchModal, dismissSearchModal] = useIonModal(
    SearchModalWrapper,
    {
      dismiss: (data: string, role: string) => dismissSearchModal(data, role),
      setCurrentPage,
    }
  );

  useEffect(() => {
    localStorage.setItem("currentPage", `${currentPage}`);
  }, [currentPage]);

  return (
    <div className="container">
      <Header
        openIndexModal={presentIndexModal}
        openSearchModal={presentSearchModal}
      />
      <SwiperWrapper />
      <Footer />
    </div>
  );
}
