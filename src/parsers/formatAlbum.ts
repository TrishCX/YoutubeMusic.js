export default function parseDataInAlbum(content: any) {
  const renderer = content.musicResponsiveListItemRenderer;
  const flexColumns = renderer.flexColumns;
  const fixedColumns = renderer.fixedColumns;

  const title =
    flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text?.runs[0]
      .text;
  const id =
    flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer.text?.runs[0]
      ?.navigationEndpoint.watchEndpoint?.videoId;
  const artist =
    flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs;

  const artists: { name: string; id?: string }[] = [];

  if (artist) {
    for (let i = 0; i < artist.length; i += 2) {
      artists.push({
        name: artist[i].text,
      });
    }
  }
  const duration =
    fixedColumns[0].musicResponsiveListItemFixedColumnRenderer.text.runs[0]
      .text;

  return {
    id,
    title,
    artists,
    duration,
  } as any;
}
