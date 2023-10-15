export declare namespace Home {
  interface Artists {
    id?: string;
    name?: string;
  }
  interface Tracks {
    title?: string;
    type?: string;
    isSingles?: boolean;
    thumbnailURL?: string;
    artists?: Artists[];
  }

  interface NewReleases {
    text?: string;
    data?: Tracks[];
  }
}
