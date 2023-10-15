import { makeContext } from "../context";
import request from "../controller";
import { CONFIG } from "../secrets";
import { fetchArtist } from "../helper/index";
// @ts-check Interfaces
import type { IArtist } from "../interfaces";

export async function getArtist(id: string): Promise<IArtist> {
  const context = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });

  const API_URL: string = `${CONFIG.youtubeMusicAPI}/browse?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;

  const data = await request.post(API_URL, {
    ...context,
    browseId: id,
  });
  const response = (await fetchArtist(data)) as IArtist;
  return response;
}
