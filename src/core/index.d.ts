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
  export function getAlbum(id: string): ReturnType<typeof AlbumGet>;
  export function getArtist(id: string): ReturnType<typeof ArtistGet>;
  export function getPlaylist(id: string): ReturnType<typeof PlaylistGet>;
  export function getTrack(id: string): ReturnType<typeof TrackGet>;
  export function searchTracks(query: string): ReturnType<typeof SearchTracks>;
  export function searchPlaylist(
    query: string
  ): ReturnType<typeof SearchPlaylist>;
  export function searchAlbums(query: string): ReturnType<typeof SearchAlbums>;
  export function searchArtists(query: string): ReturnType<typeof ArtistSearch>;
}

export = YoutubeMusic;
