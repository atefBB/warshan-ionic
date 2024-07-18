import { proxy } from "valtio";

import { pages } from "../components/pages";

type PageType = {
  imageUrl: string;
  text: string;
};

type StateType = {
  currentPage: number;
  pages: Array<PageType>;
};

export const store = proxy<StateType>({
  currentPage: Number(localStorage.getItem("currentPage")) || 1,
  pages,
});

export function setCurrentPage(page: number) {
  store.currentPage = page;
}
