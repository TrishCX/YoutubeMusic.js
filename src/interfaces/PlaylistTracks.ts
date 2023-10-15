interface IArtists {
  name?: string;
  id?: string;
}
export interface IPlaylistTracks {
  id?: string;
  title?: string;
  artists: IArtists[];
  album?: string;
  imageURL?: string;
  duration?: string;
  gradient?: string;
}
