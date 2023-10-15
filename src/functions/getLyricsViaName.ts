import { parseHTML } from "../extractors/index";
import { CONFIG } from "../secrets";
import {
  extractElementsByClass,
  extractContent,
  extractHref,
  extractJavaScriptContent,
} from "../extras/index";
import { checkErrors } from "../errors/index";

export async function getLyricsViaTitle(title: string): Promise<string> {
  checkErrors(title, `❌ | Specify something to look for.`);
  try {
    const BASE_URL: string =
      `${CONFIG.lyrics?.musicMixMatchURL}/search/${title}`.replace(
        /\s/g,
        "%20"
      );
    const body = await parseHTML(BASE_URL);
    const res = extractElementsByClass(body, "media-card-title");
    const href = extractHref(res);
    const MAIN_LYRICS_URL = `${CONFIG.lyrics?.musicMixMatchURL}${href}`;
    const lyricsPageHTML = await parseHTML(MAIN_LYRICS_URL);
    const classA = extractContent(lyricsPageHTML, "lyrics__content__ok");
    const formattedText = extractJavaScriptContent(classA as string);
    return formattedText;
  } catch (e) {
    throw new Error(`❌ | Unable to find anything for the query: ${title}`);
  }
}
