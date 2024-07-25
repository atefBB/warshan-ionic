import { ArabicServices } from "arabic-services";
// @ts-ignore
import quranAyats from "@kmaslesa/quran-ayats";

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
export function searchVerses(searchQuery: string) {
  const results: Result[] = [];

  for (const surah of quran) {
    for (const verse of surah.verses) {
      const verses = quranAyats.getAyatsBySura(surah.id);

      const searchedVerse = verses.filter(
        (v: any) => v.ayaNumber === verse.id
      )[0];

      const verseWithoutTashkeel = ArabicServices.removeTashkeel(
        searchedVerse.aya
      );
      const searchQueryTashkeel = ArabicServices.removeTashkeel(searchQuery);

      if (verseWithoutTashkeel.includes(searchQueryTashkeel)) {
        results.push({
          surah,
          verse: {
            number: searchedVerse.ayaNumber,
            text: searchedVerse.aya,
            page: searchedVerse.page,
            hizb: searchedVerse.hizb,
            juz: searchedVerse.juz,
          },
        });
      }
    }
  }

  return results;
}
