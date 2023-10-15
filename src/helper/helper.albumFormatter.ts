import { extractYear } from "../others";
export function formatAlbum(content: any) {
  const id =
    content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint
      .browseId;
  const title = content.musicResponsiveListItemRenderer.flexColumns[0]
    .musicResponsiveListItemFlexColumnRenderer.text.runs[0]?.text as string;
  const imageURL =
    content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail?.thumbnails.at(
      -1
    )?.url;
  const type =
    content.musicResponsiveListItemRenderer.flexColumns.at(-1)
      .musicResponsiveListItemFlexColumnRenderer?.text?.runs[0]?.text;
  const releasedYear = extractYear(
    content.musicResponsiveListItemRenderer.flexColumns.at(-1)
      .musicResponsiveListItemFlexColumnRenderer?.text?.runs[4]?.text
  );
  if (!releasedYear) return;
  const artist =
    content.musicResponsiveListItemRenderer.flexColumns.at(-1)
      .musicResponsiveListItemFlexColumnRenderer?.text?.runs[2].text;
  const artistId =
    content.musicResponsiveListItemRenderer.flexColumns.at(-1)
      .musicResponsiveListItemFlexColumnRenderer?.text?.runs[2]
      .navigationEndpoint?.browseEndpoint?.browseId;
  if (!artistId) return;
  const gradientColor =
    content.musicResponsiveListItemRenderer?.overlay
      ?.musicItemThumbnailOverlayRenderer?.background?.verticalGradient
      ?.gradientLayerColors;
  return {
    id,
    title,
    artist,
    type,
    imageURL,
    artistId,
    releasedYear,
    gradientColor,
  };
}
