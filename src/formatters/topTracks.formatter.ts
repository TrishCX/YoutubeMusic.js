import { chunkArray } from "../utilities/index";
import type { TopTracks } from "../interfaces/index";
export function formatTopTracks(content: any) {
  const fetchedData: any[] = [];
  const thumbnails: any[] = [];
  const ids: any[] = [];
  content.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.contents.map(
    (c: any) => {
      const d = c.musicResponsiveListItemRenderer;
      const thumb = d.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails;
      const filteredArray = thumb.filter((v: any) => v.width === 120);

      for (const item of filteredArray) {
        thumbnails.push(item.url);
      }
      for (const items of d.flexColumns) {
        const artist = items.musicResponsiveListItemFlexColumnRenderer.text;
        const videoId =
          artist.runs[0].navigationEndpoint.watchEndpoint?.videoId;
        ids.push(videoId);
        fetchedData.push(artist.runs[0].text);
      }
    }
  );

  const chunkedArray = chunkArray(fetchedData, 3);
  const formattedArray = chunkedArray;
  const topTracks: TopTracks[] = [];

  const filtrationId = ids.filter((id) => id !== undefined);
  formattedArray.map((v, index) => {
    topTracks.push({
      id: filtrationId[index],
      title: v[0],
      artists: v[1],
      album: v[2],
      thumbnailURL: thumbnails[index],
    });
  });
  return topTracks;
}
