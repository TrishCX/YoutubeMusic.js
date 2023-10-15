import YoutubeMusic from "./core/index";
import { YoutubeMusic as YTMusic } from "./classes";
export {
  fetchAlbums as searchAlbums,
  fetchPlaylist as searchPlaylist,
  getAlbum,
  getPlaylist,
  getTrack,
  searchTracks,
} from "./functions/index";
export * from "./@types/index";
export * from "./interfaces/index";
export { default as request } from "./controller/request";
export { YTMusic as YoutubeMusic };
export default YoutubeMusic;
