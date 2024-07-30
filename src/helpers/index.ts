import { ArabicServices } from "arabic-services";
// @ts-ignore
import { getAyatByIndex } from "@kmaslesa/quran-ayats";
// @ts-ignore
import { getSuraByIndex } from "@kmaslesa/quran-metadata";

import quran from "./quran.json";

export type Result = {
  surah: { id: number; name: string };
  verse: {
    number: number;
    text: string;
    page: number;
    juz: number;
    hizb: number;
  };
};

// @todo need improvements
export function searchVerses(searchQuery: string): Result[] {
  const searchRawResult = searchQueryInQuran(searchQuery);

  return searchRawResult.map(({ id, surah, verse, ayah }) => {
    const { page, juz, hizb } = getAyatByIndex(id)[0];
    const { index, name } = getSuraByIndex(surah);

    return {
      surah: { id: index, name: name.arabic },
      verse: {
        number: ayah,
        text: verse,
        page: page,
        hizb: hizb,
        juz: juz,
      },
    };
  });
}

function searchQueryInQuran(query: string) {
  return quran.filter(({ verse }) => {
    const verseWithoutTashkeel = ArabicServices.removeTashkeel(verse);
    const queryWithoutTashkeel = ArabicServices.removeTashkeel(query);

    return verseWithoutTashkeel.includes(queryWithoutTashkeel);
  });
}
