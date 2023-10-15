export function extractContent(html: string, className: string) {
  const startTag = `<span class="${className}">`;
  const endTag = `</span>`;
  const startIndexes: any[] = [];
  let startIndex = html.indexOf(startTag);

  while (startIndex !== -1) {
    startIndexes.push(startIndex);
    startIndex = html.indexOf(startTag, startIndex + 1);
  }

  if (startIndexes.length > 0) {
    const endIndex = html.indexOf(
      endTag,
      startIndexes[startIndexes.length - 1]
    );

    if (endIndex !== -1) {
      const contentParts = startIndexes.map((start, index) => {
        const end =
          index === startIndexes.length - 1
            ? endIndex
            : startIndexes[index + 1];
        return html.slice(start + startTag.length, end).trim();
      });

      const content = contentParts.join(" ").trim();
      return content;
    }
  }

  return null;
}
