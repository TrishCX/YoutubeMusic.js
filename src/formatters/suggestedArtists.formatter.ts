// @ts-check Interface
import type { ISuggestedArtists } from "../interfaces/index";

export function suggestionFormatter(bodyStructure: any) {
  const suggestedArtists: ISuggestedArtists[] = [];

  bodyStructure?.contents?.singleColumnBrowseResultsRenderer?.tabs[0]?.tabRenderer.content.sectionListRenderer.contents[5].musicCarouselShelfRenderer?.contents.map(
    (content: any) => {
      const title = content.musicTwoRowItemRenderer.title.runs[0].text;
      const id =
        content.musicTwoRowItemRenderer.title.runs[0]?.navigationEndpoint
          ?.browseEndpoint?.browseId;
      const imageURL =
        content?.musicTwoRowItemRenderer.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail.thumbnails.at(
          -1
        ).url;
      const subscribers =
        content?.musicTwoRowItemRenderer?.subtitle.runs[0]?.text;

      const objectToPush: ISuggestedArtists = {
        title,
        id,
        imageURL,
        subscribers,
      };

      suggestedArtists.push({
        ...objectToPush,
      });
    }
  );
  return suggestedArtists;
}
