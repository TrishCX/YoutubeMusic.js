interface IArtists {
  name?: string;
}
export interface IAlbumTrack {
  id?: string;
  title?: string;
  album?: string;
  imageURL?: string;
  duration?: string;
  artists?: IArtists[];
}
