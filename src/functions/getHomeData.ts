// @ts-check Namespace
import type { Home } from "../interfaces/index";
import request from "../controller";
import { homeFormatter } from "../formatters/index.formatters";
import { makeContext } from "../context";
import { CONFIG } from "../secrets";

export async function getHomeContent() {
  const apiUrl =
    "https://music.youtube.com/youtubei/v1/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30";

  //   try {
  const response = await request.post(apiUrl, {
    context: {
      client: {
        clientName: "WEB_REMIX",
        clientVersion: "1.20231009.01.00",
      },
    },
  });
  return homeFormatter(response);
}
