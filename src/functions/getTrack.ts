import { makeContext } from "../context";
import request from "../controller";
import { CONFIG } from "../secrets/index";
import { fetchTrackInfo } from "../helper";
import { ITrack } from "../interfaces";

export async function getTrack(id: string): Promise<ITrack> {
  const REST_URL: string = `player?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30`;
  const body = makeContext({
    clientName: "WEB",
    clientVersion: "2.20210622.10.00",
  });
  const fetcher = await request.post(
    `${CONFIG.youtubeIGoogleAPI}/${REST_URL}`,
    {
      videoId: id,
      ...body,
    }
  );
  const formattedTrack: ITrack = fetchTrackInfo(fetcher);
  return formattedTrack;
}
