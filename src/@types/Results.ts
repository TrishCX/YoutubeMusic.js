import { Search } from "./enums/Option";
import { Get, GetType } from "./enums/Get";
import {
  IArtistResult,
  IPlaylist,
  SearchTracks,
  ITrack,
  IPlaylistTracks,
  IAlbumTrack,
  IArtist,
  IAlbum,
} from "../interfaces";

export type Result<T> = T extends Search.Tracks | "Tracks"
  ? SearchTracks
  : T extends Search.Playlists | "Playlists"
  ? IPlaylist[]
  : T extends Search.Artist | "Artist"
  ? IArtistResult[]
  : T extends Search.Albums | "Albums"
  ? IAlbum[]
  : T extends Search.Lyrics | "Lyrics"
  ? string
  : never;

export type GetResults<T> = T extends Get.Track | "Track"
  ? ITrack
  : T extends Get.Playlist | "Playlist"
  ? IPlaylistTracks[]
  : T extends Get.Album | "Album"
  ? IAlbumTrack[]
  : T extends Get.Artist | "Artist"
  ? IArtist
  : T extends Get.Lyrics | "Lyrics"
  ? string
  : never;
