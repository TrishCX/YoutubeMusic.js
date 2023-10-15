import type { Home } from "../interfaces/index";

export function homeFormatter(bodyStructure: any) {
  const combinedArray: Home.Tracks[] = [];
  const content =
    bodyStructure.contents?.singleColumnBrowseResultsRenderer.tabs[0]
      .tabRenderer.content?.sectionListRenderer?.contents[2];

      return;
  // const item =
  //   bodyStructure.continuationContents.sectionListContinuation.contents[0];
  // const name =
  //   item.musicCarouselShelfRenderer.header
  //     ?.musicCarouselShelfBasicHeaderRenderer?.title.runs[0]?.text;
  // item.musicCarouselShelfRenderer.contents.map((content: any) => {
  //   const rowTwoRenderer = content?.musicTwoRowItemRenderer;
  //   const coreObject = rowTwoRenderer;
  //   const title = coreObject?.title.runs[0]?.text;
  //   const thumbnailURL =
  //     coreObject.thumbnailRenderer.musicThumbnailRenderer?.thumbnail?.thumbnails?.at(
  //       -1
  //     )?.url;
  //   const albumType = getAlbumType(coreObject.subtitle?.runs[0].text);
  //   const artists = coreObject?.subtitle.runs;

  //   for (var _ of artists) {
  //     const _item: Home.Tracks = {
  //       type: artists[0].text,
  //       artists: [],
  //       title,
  //       isSingles: albumType === "Single" ? true : false,
  //       thumbnailURL,
  //     };
  //     for (let i = 2; i < artists.length; i += 2) {
  //       const artist = {
  //         name: artists[i].text,
  //         id: artists[i].navigationEndpoint.browseEndpoint.browseId,
  //       };
  //       _item?.artists?.push(artist);
  //     }
  //     combinedArray.push(_item);
  //   }
  // });

  // const filteredArray = combinedArray.filter(
  //   (item, index, self) =>
  //     index ===
  //     self.findIndex(
  //       (t) =>
  //         t.type === item.type &&
  //         t.title === item.title &&
  //         JSON.stringify(t.artists) === JSON.stringify(item.artists)
  //     )
  // );

  // const response: Home.NewReleases[] = [];
  // response.push({
  //   text: name,
  //   data: filteredArray,
  // });
  // return response;
}

function getAlbumType(text = "") {
  switch (text) {
    case "Album":
      return "Album";
    case "EP":
      return "EP";
    default:
      return "Single";
  }
}
