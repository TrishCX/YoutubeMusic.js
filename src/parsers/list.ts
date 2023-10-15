export default function listParser(content: any) {
  const renderer = content.musicResponsiveListItemRenderer;
  const flexColumns = renderer.flexColumns;
  const fixedColumns = renderer.fixedColumns;

  const id =
    flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0]
      ?.navigationEndpoint?.watchEndpoint?.videoId;
  const title =
    flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;

  const artists = displayArtists(
    flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs
  );
  const album =
    flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text;
  const imageURL =
    renderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.at(-1).url;

  const duration =
    fixedColumns[0].musicResponsiveListItemFixedColumnRenderer.text.runs[0]
      .text;
  const gradient =
    renderer.overlay?.musicItemThumbnailOverlayRenderer?.background
      ?.verticalGradient?.gradientLayerColors;

  return {
    id,
    title,
    artists,
    album,
    imageURL,
    duration,
    gradient,
  };
}

function displayArtists(array: any[]) {
  const artists: { name: string; id?: string }[] = [];
  array.forEach((item) => {
    if (
      item.navigationEndpoint &&
      item.navigationEndpoint.browseEndpoint
        .browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig
        .pageType === "MUSIC_PAGE_TYPE_ARTIST"
    ) {
      artists.push({
        name: item?.text,
        id: item?.navigationEndpoint?.browseEndpoint?.browseId,
      });
    }
  });

  if (artists.length === 0) {
    const delimiterIndex = array.findIndex((item) => item.text === " • ");
    if (delimiterIndex !== -1) {
      array
        .filter((item, index) => index < delimiterIndex && item.name !== " & ")
        .forEach((item) => artists.push({ name: item.text }));
    }
  }

  return artists;
}
