import { CONFIG } from "../secrets";
import request from "../controller";
import { makeContext } from "../context";
import parseTracks from "../parsers/search";
import type { SearchTracks } from "../interfaces/index";

export async function searchTracks(query: string): Promise<SearchTracks[]> {
  const REST_URI = `search?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`;
  const body = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "1.20231004.01.00",
  });
  const data = await request.post(`${CONFIG.youtubeMusicAPI}/${REST_URI}`, {
    query,
    ...body,
    params: "EgWKAQIIAWoKEAoQCRADEAQQBQ%3D%3D",
  });
  const response: SearchTracks[] = parseTracks(data);
  return response;
}
