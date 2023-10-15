import parsePlaylist from "../parsers/playlist";
import type { IPlaylist } from "../interfaces/index";

export async function formatPlaylist(content: any) {
  const { contents } =
    content.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.pop()
      .musicShelfRenderer;
  const playlists: IPlaylist[] = [];
  contents.forEach((bodyStructure: any) => {
    const response = parsePlaylist(bodyStructure);
    playlists.push({
      ...response,
    });
  });
  return playlists;
}
