import type { IConfig } from "../interfaces/index.js";

export const CONFIG: IConfig = {
  youtubeIGoogleAPI: "https://youtubei.googleapis.com/youtubei/v1",
  youtubeMusicAPI: "https://music.youtube.com/youtubei/v1",
  extra: {
    continuationURL: `https://music.youtube.com/youtubei/v1/browse?continuation=${`Continuation_URL`}&type=next&itct=CAIQybcCIhMI2oq7_a32gQMVXpLRBB2-EgLz&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`,
  },
  lyrics: {
    geniusURL: `https://genius.com/search?q=`,
    musicMixMatchURL: "https://www.musixmatch.com",
  },
};
