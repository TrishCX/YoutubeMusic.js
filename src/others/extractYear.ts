export function extractYear(string: string) {
  const regex = /\b\d{4}\b/g;
  const matches = string.match(regex);
  return matches ? matches.map((match) => parseInt(match)).join("") : undefined;
}
