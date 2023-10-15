import { IAlbum } from "./Album";
import { ISuggestedArtists } from "./SuggestedArtists";
import { TopTracks } from "./TopTracks";
export interface IArtist {
  name?: string;
  description?: string;
  headerURL?: string;
  subscribers?: string;
  albums?: IAlbum[];
  singles?: IAlbum[];
  playlistId?: any;
  gallery?: string[];
  topTracks?: TopTracks[];
  fansAlsoLikes?: ISuggestedArtists[];
}
