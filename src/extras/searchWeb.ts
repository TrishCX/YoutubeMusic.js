import { getPayload } from "../constants/Payload";
import {
  generateRandomString,
  getHeaders,
  getRandomInt,
  getStringBetweenStrings,
} from "../utilities/index";

// export interface IArtistImage {
//   title?: string;
//   url?: string;
//   imageURL?: string;
// }

export async function searchWeb(query: string) {
  const formData = new URLSearchParams();
  const includeString = `${query} images    site:"pinterest.com"`;
  const utfPayload = getPayload(includeString);
  formData.append("f.req", JSON.stringify(utfPayload));
  formData.append("at", `${generateRandomString(29)}:${Date.now()}`);
  const queryString = new URLSearchParams({
    rpcids: "HoAMBc",
    "source-path": "/search",
    "f.sid": -getRandomInt(0, 9e10) as any,
    bl: "boq_visualfrontendserver_20220505.05_p0" as any,
    hl: "en" as any,
    authuser: 0 as any,
    _reqid: -getRandomInt(0, 9e5) as any,
    ...{},
  }).toString();

  const request = await fetch(
    `https://www.google.com/_/VisualFrontendUi/data/batchexecute?${queryString}`,
    {
      method: "POST",
      body: formData,
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        ...getHeaders({ desktop: true }),
      } as any,
      ...{},
    }
  );
  const response = await request.text();
  const res =
    "[null" + (getStringBetweenStrings(response, '"[null', ']"') || "") + "]";
  const data = JSON.parse(res.replace(/\\"/g, '"').replace(/\\\\"/g, "'"));
  const items = data[56]?.[1]?.[0]?.[0]?.[1]?.[0];
  const array: string[] = [];
  items.map((el: any) => {
    const item = el[0]?.[0]?.["444383007"];
    if (!item?.[1]) return;

    const imageData = item[1]?.filter((el: string) => Array.isArray(el));
    const image = imageData?.[1];
    const title = item[1]?.find((el: any) => el?.[2001])["2008"][1];
    const url = item[1]?.find((el: any) => el?.[2001])["2003"][2];
    const imageURL = decodeURIComponent(
      JSON.parse('"' + image[0].replace(/"/g, '"') + '"')
    );
    array.push(imageURL);
  });
  return array.slice(0, 10);
}
