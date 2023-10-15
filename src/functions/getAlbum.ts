import { CONFIG } from "../secrets";
import request from "../controller";
import { makeContext } from "../context";
import { formatGetAlbums } from "../helper/index";
import { IAlbumTrack } from "../interfaces/index";

export async function getAlbum(id: string): Promise<IAlbumTrack[]> {
  const URI = `${CONFIG.youtubeMusicAPI}/browse?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;
  const body = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });
  const data = await request.post(URI, {
    ...body,
    browseId: id,
  });
  const response = await formatGetAlbums(data);
  return response;
}
