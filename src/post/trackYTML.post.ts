import request from "../controller";
import { CONFIG } from "../secrets";
import { makeContext } from "../context";

export async function fetchTrackYTML(videoId?: string): Promise<string> {
  const context = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });
  const API_URL: string = `${CONFIG.youtubeMusicAPI}/next?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`;
  const bodyObject = {
    enablePersistentPlaylistPanel: true,
    isAudioOnly: true,
    params: "mgMDCNgE",
    playerParams: "igMDCNgE",
    tunerSettingValue: "AUTOMIX_SETTING_NORMAL",
    videoId: `${videoId}`,
    playlistId: `RDAMVM${videoId}`,
  };

  const body = await request.post(API_URL, {
    ...context,
    ...bodyObject,
  });

  const browseId =
    body.contents?.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer
      .watchNextTabbedResultsRenderer.tabs[1].tabRenderer?.endpoint
      .browseEndpoint?.browseId;

  return browseId as string;
}
