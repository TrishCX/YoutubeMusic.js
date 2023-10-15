export default function parseMetaData(content: any) {
  const artist = content.musicDetailHeaderRenderer.subtitle.runs[2].text;
  const album = content.musicDetailHeaderRenderer.title.runs[0].text;
  const thumbnailURL =
    content.musicDetailHeaderRenderer.thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails.pop()
      ?.url;

  return {
    album,
    artist,
    thumbnailURL,
  };
}
