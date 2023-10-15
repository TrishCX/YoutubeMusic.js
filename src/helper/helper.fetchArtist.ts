import type { IAlbum } from "../interfaces/index";
import { searchWeb } from "../extras/index";
import {
  formatTopTracks,
  suggestionFormatter,
} from "../formatters/index.formatters";

export async function fetchArtist(body: any) {
  const name = body.header?.musicImmersiveHeaderRenderer?.title.runs[0].text;
  const description =
    body.header.musicImmersiveHeaderRenderer?.description?.runs[0].text;
  const headerURL =
    body.header.musicImmersiveHeaderRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails?.at(
      -1
    ).url;
  const subscribers =
    body.header.musicImmersiveHeaderRenderer.subscriptionButton
      .subscribeButtonRenderer.subscriberCountWithSubscribeText.runs[0].text;

  const { contents } =
    body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
      .sectionListRenderer;

  const singles: IAlbum[] = [];
  const albums: IAlbum[] = [];
  const topTracks = formatTopTracks(body);
  const fansAlsoLikes = suggestionFormatter(body);
  for (const content of contents) {
    if (content.musicCarouselShelfRenderer?.contents) {
      if (
        content.musicCarouselShelfRenderer.contents[0].musicTwoRowItemRenderer
          .title.runs[0].navigationEndpoint?.browseEndpoint
          .browseEndpointContextSupportedConfigs
          .browseEndpointContextMusicConfig.pageType === "MUSIC_PAGE_TYPE_ALBUM"
      )
        content.musicCarouselShelfRenderer.contents.forEach((item: any) => {
          const title = item.musicTwoRowItemRenderer.title.runs[0].text;
          const type = getAlbumType(
            item.musicTwoRowItemRenderer.subtitle.runs[0]?.text
          );
          const id =
            item.musicTwoRowItemRenderer.title.runs[0].navigationEndpoint
              ?.browseEndpoint?.browseId;
          const released =
            item.musicTwoRowItemRenderer.subtitle.runs.pop()?.text;
          const imageURL =
            item.musicTwoRowItemRenderer?.thumbnailRenderer.musicThumbnailRenderer.thumbnail.thumbnails
              .shift()
              ?.url.replace("w226", "w800", "h226", "h800");
          const gradient = item?.musicTwoRowItemRenderer?.thumbnailOverlay
            ?.musicItemThumbnailOverlayRenderer?.background?.verticalGradient
            ?.gradientLayerColors as string[];

          if (type === "Single")
            singles.push({
              artist: name,
              artistId: id,
              title: title,
              id,
              gradientColor: gradient[0],
              imageURL,
              releasedYear: released,
              type,
            });
          else
            albums.push({
              artist: name,
              artistId: id,
              title: title,
              id,
              gradientColor: gradient[0],
              imageURL,
              releasedYear: released,
              type,
            });
        });
    }
  }
  const playlistId =
    body.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
      .sectionListRenderer.contents[0].musicShelfRenderer.title?.runs[0]
      .navigationEndpoint.browseEndpoint.browseId;
  const galleryImages = await searchWeb(name);
  return {
    name,
    description,
    headerURL,
    subscribers,
    albums,
    singles,
    playlistId,
    gallery: galleryImages,
    topTracks,
    fansAlsoLikes,
  };
}

function getAlbumType(text: string) {
  switch (text) {
    case "Album":
      return "Album";
    case "EP":
      return "EP";
    default:
      return "Single";
  }
}
