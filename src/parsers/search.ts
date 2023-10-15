import { musicParser } from "../helper";

export default function parseTracks(bodyContent: any) {
  const content =
    bodyContent.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.pop()
      .musicShelfRenderer;
  const array: any[] = [];
  for (const items of content.contents) {
    const parsedResponse = musicParser(items);
    array.push(parsedResponse);
  }
  return array;
}
