interface IArtists {
  name?: string;
  id?: string;
}
export interface SearchTracks {
  id?: string;
  title?: string;
  duration?: string;
  artists?: IArtists[];
  album?: string;
  thumbnail?: string;
}
