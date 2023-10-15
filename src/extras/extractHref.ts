export function extractHref(html: string) {
  const hrefRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
  const match = html.match(hrefRegex);

  if (match && match[2]) {
    const hrefValue = match[2];
    return hrefValue;
  } else {
    return null;
  }
}
