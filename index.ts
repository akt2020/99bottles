class BeerLyrics {
  getBottleText(count: number): string {
    return `${count ? count : "no more"} bottle${count !== 1 ? "s" : ""}`;
  }

  getLyricsParagraph(count: number): string {
    return `${this.getBottleText(
      count
    )} of beer on the wall, ${this.getBottleText(
      count
    )} of beer.\nTake one down and pass it around, ${this.getBottleText(
      --count
    )} of beer on the wall.\n`;
  }

  getBeerSongLyrics(count: number): string {
    let tempCount: number = count;
    let result: string = "";
    while (tempCount > 0) {
      result += this.getLyricsParagraph(tempCount) + "\n";
      tempCount--;
    }

    result += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ${count} bottles of beer on the wall.`;
    return result;
  }
}

export { BeerLyrics };
