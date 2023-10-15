import { formatAlbum } from "../helper";
import type { IAlbum } from "../interfaces/index";

export async function albumParser(body: any) {
  const { contents } =
    body.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.pop()
      .musicShelfRenderer;

  const albums: IAlbum[] = [];

  contents.forEach((content: any) => {
    const album = formatAlbum(content);
    return albums.push({
      ...album,
    });
  });
  return albums;
}
