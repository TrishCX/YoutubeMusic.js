import { CONFIG } from "../secrets";
import request from "../controller";
import { makeContext } from "../context";
import parseArtist from "../parsers/artist";
import type { IArtistResult } from "../interfaces/index";

export async function searchArtists(query: string): Promise<IArtistResult[]> {
  const REST_URI = `search?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;
  const body = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });
  const data = await request.post(`${CONFIG.youtubeMusicAPI}/${REST_URI}`, {
    query,
    ...body,
    params: "EgWKAQIgAWoKEAMQBBAJEAoQBQ%3D%3D",
  });
  const response: IArtistResult[] = parseArtist(data);
  return response;
}
