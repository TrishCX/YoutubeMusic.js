interface ILyrics {
  musicMixMatchURL?: string;
  googleURI?: string;
  geniusURL?: string;
}
export interface IConfig {
  youtubeIGoogleAPI: string;
  youtubeMusicAPI: string;
  extra?: {};
  lyrics?: ILyrics;
}
