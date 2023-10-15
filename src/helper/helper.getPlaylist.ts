import listParser from "../parsers/list";
import type { IPlaylistTracks } from "../interfaces/index";
export function getItemsInPlaylist(body: any) {
  const content =
    body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
      .sectionListRenderer.contents[0];
  const { contents } =
    content.musicPlaylistShelfRenderer ?? content.musicCarouselShelfRenderer;

  const playlists: IPlaylistTracks[] = [];

  contents.forEach((bodyStructure: any) => {
    const res = listParser(bodyStructure);

    playlists.push({
      ...res,
    });
  });
  return playlists;
}
