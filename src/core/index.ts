// <reference path="../functions/index.ts" />
import {
  getAlbum as AlbumGet,
  getPlaylist as PlaylistGet,
  getArtist as ArtistGet,
  getTrack as TrackGet,
  searchTracks as SearchTracks,
  fetchAlbums as SearchAlbums,
  fetchPlaylist as SearchPlaylist,
  searchArtists as ArtistSearch,
  getLyrics as LyricsGet,
  getLyricsViaTitle as LyricsTitle,
} from "../functions";

declare namespace YoutubeMusic {
  export enum AlbumType {
    Single = "Single",
    Album = "Album",
    EP = "EP",
  }

  export type ClientName = "WEB" | "WEB_REMIX";
  export type ClientVersions =
    | "0.1"
    | "2.20210622.10.00"
    | "1.2023100 4.01.00"
    | "2.20211025.07.00";
  export enum Get {
    Track = "Track",
    Artist = "Artist",
    Playlist = "Playlist",
    Album = "Album",
    Lyrics = "Lyrics",
  }
  export enum Search {
    Tracks = "Tracks",
    Playlists = "Playlists",
    Artist = "Artist",
    Albums = "Albums",
    Lyrics = "Lyrics",
  }
  export function getAlbum(id: string): ReturnType<typeof AlbumGet>;
  export function getArtist(id: string): ReturnType<typeof ArtistGet>;
  export function getPlaylist(id: string): ReturnType<typeof PlaylistGet>;
  export function getTrack(id: string): ReturnType<typeof TrackGet>;
  export function getLyrics(id: string): ReturnType<typeof LyricsGet>;
  export function getLyricsViaTitle(
    title: string
  ): ReturnType<typeof LyricsTitle>;
  export function searchTracks(query: string): ReturnType<typeof SearchTracks>;
  export function searchPlaylist(
    query: string
  ): ReturnType<typeof SearchPlaylist>;
  export function searchAlbums(query: string): ReturnType<typeof SearchAlbums>;
  export function searchArtists(query: string): ReturnType<typeof ArtistSearch>;
}

export = YoutubeMusic;
