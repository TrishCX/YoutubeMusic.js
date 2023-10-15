import parseDataInAlbum from "../parsers/formatAlbum";
import parseMetaData from "../parsers/metadata";
import type { IAlbumTrack } from "../interfaces/index";

export async function formatGetAlbums(content: any) {
  const { contents } =
    content.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer
      .content.sectionListRenderer.contents[0].musicShelfRenderer;
  const { album, artist, thumbnailURL } = parseMetaData(content.header);

  const tracks: IAlbumTrack[] = [];
  contents.forEach((structureContent: any) => {
    const song = parseDataInAlbum(structureContent);
    song.album = album;
    if (!song.artists.length) song.artists = [{ name: artist }];
    song.imageURL = thumbnailURL;
    tracks.push(song);
  });
  return tracks;
}
