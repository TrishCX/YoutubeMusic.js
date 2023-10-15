// @ts-check
import {
  Search,
  SearchType,
  Result,
  GetType,
  Get,
  GetResults,
} from "../@types/index";
import {
  searchTracks,
  fetchPlaylist,
  searchArtists,
  getTrack,
  getAlbum,
  getPlaylist,
  getArtist,
  fetchAlbums,
  getLyrics,
  getLyricsViaTitle,
} from "../functions/index";

export default class YoutubeMusic {
  public async search<T extends SearchType>(
    query: string,
    type: T
  ): Promise<Result<T>> {
    switch (type) {
      case Search.Tracks as string:
        const trackData = await searchTracks(query);
        return trackData as Result<T>;
      case Search.Playlists as string:
        const playlistData = await fetchPlaylist(query);
        return playlistData as Result<T>;
      case Search.Artist as string:
        const artistData = await searchArtists(query);
        return artistData as Result<T>;
      case Search.Albums as string:
        const albumData = await fetchAlbums(query);
        return albumData as Result<T>;
      case Search.Lyrics as string:
        const lyricsData = await getLyricsViaTitle(query);
        return lyricsData as Result<T>;
      default:
        throw new Error("Not a valid choice.");
    }
  }
  public async get<T extends GetType>(
    id: string,
    type: T
  ): Promise<GetResults<T>> {
    switch (type) {
      case Get.Track as string:
        const getTrackData = await getTrack(id);
        return getTrackData as GetResults<T>;
      case Get.Album as string:
        const getAlbumData = await getAlbum(id);
        return getAlbumData as GetResults<T>;
      case Get.Playlist as string:
        const getPlaylistData = await getPlaylist(id);
        return getPlaylistData as GetResults<T>;
      case Get.Artist as string:
        const getArtistData = await getArtist(id);
        return getArtistData as GetResults<T>;
      case Get.Lyrics as string:
        const getLyricsData = await getLyrics(id);
        return getLyricsData as GetResults<T>;
      default:
        throw new Error("Not a valid choice.");
    }
  }
}
