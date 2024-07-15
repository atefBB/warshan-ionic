import { proxy } from "valtio";

import { pages } from "../components/pages";

type PageType = {
  imageUrl: string;
  text: string;
};

type StateType = {
  currentPage: number;
  pages: Array<PageType>;
  setCurrentPage: (page: number) => void;
};

export const store = proxy<StateType>({
  currentPage: Number(localStorage.getItem("currentPage")) || 1,
  pages,
  setCurrentPage: (page: number) => {
    store.currentPage = page;
  },
});
