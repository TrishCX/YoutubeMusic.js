import { CONFIG } from "../secrets";
import request from "../controller";
import { makeContext } from "../context";
import { formatPlaylist } from "../helper/index";
// @ts-check interfaces;
import type { IPlaylist } from "../interfaces";

export async function fetchPlaylist(query: string): Promise<IPlaylist[]> {
  const API_URL = `${CONFIG.youtubeMusicAPI}/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;
  const context = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });

  const data = await request.post(API_URL, {
    query,
    params: "EgWKAQIoAWoKEAoQAxAEEAUQCQ%3D%3D",
    ...context,
  });
  const response = await formatPlaylist(data);
  return response;
}
