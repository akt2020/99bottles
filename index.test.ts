import { BeerLyrics } from "./index";

import { lyrics } from "./lyrics";

let beerLyrics = new BeerLyrics();

describe("BeerLyrics", () => {
  describe("getBottleText", () => {
    it("should return singular text if the number is 1", () => {
      expect(beerLyrics.getBottleText(1)).toBe("1 bottle");
    });

    it("should return `no more bottles` if the number is 0", () => {
      expect(beerLyrics.getBottleText(0)).toBe("no more bottles");
    });

    it("should return plural text if the number is more then 1", () => {
      expect(beerLyrics.getBottleText(2)).toBe("2 bottles");
    });
  });

  describe("getLyricsParagraph", () => {
    it("should return lyrics with bottle if the number is 1", () => {
      expect(beerLyrics.getLyricsParagraph(1)).toBe(
        `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
      );
    });

    it("should return lyrics with bottles if the number is 2", () => {
      expect(beerLyrics.getLyricsParagraph(2)).toBe(
        `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
      );
    });

    it("should return lyrics with bottles if the number is 3", () => {
      expect(beerLyrics.getLyricsParagraph(3)).toBe(
        `3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n`
      );
    });
  });

  describe("getBeerSongLyrics", () => {
    it("should return the complete lyrics", () => {
      expect(beerLyrics.getBeerSongLyrics(99)).toBe(lyrics);
    });
  });
});
