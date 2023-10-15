export function musicParser(data: any) {
  const item =
    data.musicResponsiveListItemRenderer.flexColumns[0]
      .musicResponsiveListItemFlexColumnRenderer.text.runs;
  const title = item[0]?.text;
  const { length } =
    data.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs;
  const album =
    data.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs[length - 3].text;
  const thumbnailUrl =
    data.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
      .pop()
      ?.url.replace("w120", "w800")
      .replace("h120", "h800");
  const duration =
    data.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs[
      data.musicResponsiveListItemRenderer.flexColumns[1]
        .musicResponsiveListItemFlexColumnRenderer.text.runs.length - 1
    ].text;
  const artists =
    data.musicResponsiveListItemRenderer.flexColumns[1]
      .musicResponsiveListItemFlexColumnRenderer.text.runs;

  const artistsArray: any[] = [];

  artists.forEach((content: any) => {
    if (
      content.navigationEndpoint &&
      content.navigationEndpoint.browseEndpoint
        .browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig
        .pageType === "MUSIC_PAGE_TYPE_ARTIST"
    ) {
      const id = content.navigationEndpoint.browseEndpoint.browseId;
      const name = content?.text;
      artistsArray.push({
        id,
        name,
      });
    }
  });
  const id =
    data.musicResponsiveListItemRenderer.flexColumns[0]
      .musicResponsiveListItemFlexColumnRenderer.text.runs[0].navigationEndpoint
      .watchEndpoint.videoId;

  return {
    title,
    id,
    duration,
    artists: artistsArray,
    album,
    thumbnail: thumbnailUrl,
  };
}
