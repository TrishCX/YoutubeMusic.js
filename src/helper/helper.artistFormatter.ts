export function artistFormat(content: any) {
  const id =
    content.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint
      ?.browseId;
  const name =
    content.musicResponsiveListItemRenderer.flexColumns[0]
      .musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
  const imageURL =
    content.musicResponsiveListItemRenderer.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
      .pop()
      ?.url?.replace("w120", "w800")
      .replace("h120", "h800");
  const subscribers =
    content.musicResponsiveListItemRenderer.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text.runs.at(
      -1
    )?.text;
  return {
    id,
    name,
    imageURL,
    subscribers,
  };
}
