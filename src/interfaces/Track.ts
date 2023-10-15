interface IAuthor {
  name?: string;
  id?: string;
}
interface IThumbnail {
  url?: string;
  height?: number;
  width?: number;
}
interface IViews {
  label?: string;
  initial?: string;
}

interface IDate {
  formatted?: string;
  initial?: string;
}
interface IDuration {
  label?: string;
  initial?: string;
}

interface IEmbed {
  iframeUrl?: string;
  width?: number;
  height?: number;
}

export interface ITrack {
  title?: string;
  description?: string;
  keywords?: string[];
  videoId?: string;
  author?: IAuthor;
  thumbnail?: IThumbnail[];
  views?: IViews;
  duration?: IDuration;
  date?: IDate;
  embed?: IEmbed;
  category?: string;
}
