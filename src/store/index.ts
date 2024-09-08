import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";

import {
  getSuraList,
  getSuraByPageNumber,
  getJuzByPageNumber,
  // @ts-ignore
} from "@kmaslesa/quran-metadata";

import { pages } from "../components/pages";

type PageType = {
  imageUrl: string;
  text: string;
};

type StateType = {
  currentPage: number;
  pages: Array<PageType>;
  chapters: Array<any>;
  chapterName: Array<Record<string, any>>;
  currentJuz: string;
};

const initCurrentPage = Number(localStorage.getItem("currentPage")) || 1;

export const store = proxy<StateType>({
  currentPage: initCurrentPage,
  pages,
  chapters: getSuraList(),
  chapterName: getSuraByPageNumber(initCurrentPage),
  currentJuz: getJuzByPageNumber(initCurrentPage).juzNumber,
});

subscribeKey(store, "currentPage", (newCurrentPage) => {
  store.chapterName = getSuraByPageNumber(newCurrentPage);
  store.currentJuz = getJuzByPageNumber(newCurrentPage).juzNumber;
});

export function setCurrentPage(page: number) {
  store.currentPage = page;
  localStorage.setItem("currentPage", `${page}`);
}
