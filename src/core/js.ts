// <reference path="../functions/index.ts" />
import {
  getAlbum as AlbumGet,
  getPlaylist as PlaylistGet,
  getTrack as TrackGet,
  searchTracks as SearchTracks,
  fetchAlbums as SearchAlbums,
  fetchPlaylist as SearchPlaylist,
  getArtist as ArtistGet,
  getLyrics as LyricGet,
  getLyricsViaTitle as LyricsTitle,
  searchArtists as ArtistSearch,
} from "../functions";

const YTMusic = {
  getAlbum: (id: string) => {
    return AlbumGet(id);
  },
  getPlaylist: (id: string) => {
    PlaylistGet(id);
  },
  getLyrics: (id: string) => {},
  getTrack: (id: string) => {
    return TrackGet(id);
  },
  searchTracks: (query: string) => {
    return SearchTracks(query);
  },
  searchAlbums: (query: string) => {
    return SearchAlbums(query);
  },
  searchPlaylist: (query: string) => {
    return SearchPlaylist(query);
  },
};

export { YTMusic };
