export function extractElementsByClass(html: string, className: string) {
  const classRegex = new RegExp(
    `h2[^>]+class\\s*=\\s*["']${className}["'][^>]*>(.*?)<\/h2>`,
    "g"
  );
  const matches = [];
  let match;
  while ((match = classRegex.exec(html)) !== null) {
    matches.push(match[1].trim());
  }
  return matches[0];
}
