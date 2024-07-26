import { proxy } from "valtio";
// @ts-ignore
import { getSuraList } from "@kmaslesa/quran-metadata";

import { pages } from "../components/pages";

type PageType = {
  imageUrl: string;
  text: string;
};

type StateType = {
  currentPage: number;
  pages: Array<PageType>;
  chapters: Array<any>;
};

export const store = proxy<StateType>({
  currentPage: Number(localStorage.getItem("currentPage")) || 1,
  pages,
  chapters: getSuraList(),
});

export function setCurrentPage(page: number) {
  store.currentPage = page;
}
