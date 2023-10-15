import { artistFormat } from "../helper";
import type { IArtistResult } from "../interfaces/index";

export default function parseArtist(bodyContent: any) {
  const { contents } =
    bodyContent.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.pop()
      .musicShelfRenderer;

  const artists: IArtistResult[] = [];

  contents.forEach((content: any) => {
    const artist = artistFormat(content);
    return artists.push({
      ...artist,
    });
  });
  return artists;
}
