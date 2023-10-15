import { makeContext } from "../context";
import request from "../controller";
import { CONFIG } from "../secrets";
import { albumParser } from "../parsers/albums";
import type { IAlbum } from "../interfaces";

export async function fetchAlbums(query: string): Promise<IAlbum[]> {
  const API_URI: string = `${CONFIG.youtubeMusicAPI}/search?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;
  const body = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });
  const data = await request.post(API_URI, {
    ...body,
    params: "EgWKAQIYAWoKEAkQAxAEEAUQCg",
    query,
  });
  const albumContent = await albumParser(data);
  return albumContent;
}
