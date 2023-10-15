import { makeContext } from "../context";
import request from "../controller";
import { CONFIG } from "../secrets";
import { getItemsInPlaylist } from "../helper/index";
// @ts-check Interfaces
import type { IPlaylistTracks } from "../interfaces";

export async function getPlaylist(id: string) {
  const context = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });
  let playlistId: string = id;
  const API_URL: string = `${CONFIG.youtubeMusicAPI}/browse?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;

  if (!id.startsWith("VL")) {
    playlistId = "VL" + id;
  }

  const data = await request.post(API_URL, {
    ...context,
    browseId: playlistId,
  });
  const response: IPlaylistTracks[] = getItemsInPlaylist(data);
  return response;
}
