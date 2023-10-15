export default function parsePlaylist(body: any) {
  const renderer = body.musicResponsiveListItemRenderer;
  const flexColumns = renderer.flexColumns;
  const id = renderer.navigationEndpoint?.browseEndpoint?.browseId as string;
  const title =
    renderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer?.text
      .runs[0].text;
  const imageURL =
    renderer.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails.at(
      -1
    )?.url;
  const totalTracks = Number(
    flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs
      .at(-1)
      ?.text?.replace("songs", "")
  );
  const gradient = renderer?.overlay?.musicItemThumbnailOverlayRenderer
    ?.background?.verticalGradient?.gradientLayerColors as string[];
  return {
    id,
    title,
    imageURL,
    totalTracks,
    gradient,
  };
}
