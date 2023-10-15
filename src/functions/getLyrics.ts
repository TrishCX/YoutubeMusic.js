import { CONFIG } from "../secrets";
import { makeContext } from "../context/index";
import request from "../controller";
import { fetchTrackYTML } from "../post";
import { checkErrors } from "../errors";

export async function getLyrics(id: string): Promise<string> {
  checkErrors(id, `❌ | Specify a YouTube Music Track id`);
  try {
    const YTML = await fetchTrackYTML(id);
    const API_URL: string = `${CONFIG.youtubeMusicAPI}/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`;

    const context = makeContext({
      clientName: "WEB_REMIX",
      clientVersion: "0.1",
    });

    const bodyStructure: any = await request.post(API_URL, {
      ...context,

      browseId: YTML,
    });

    const lyrics =
      bodyStructure.contents?.sectionListRenderer.contents[0]
        .musicDescriptionShelfRenderer.description?.runs[0]?.text;

    return lyrics as string;
  } catch (e) {
    throw new Error(`❌ | Something went wrong`);
  }
}
