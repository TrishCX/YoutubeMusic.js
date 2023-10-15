export function getStringBetweenStrings(
  data: any,
  startString: string,
  endString: string
) {
  const regex = new RegExp(
    `${escapeStringRegexp(startString)}(.*?)${escapeStringRegexp(endString)}`,
    "s"
  );
  const match = data.match(regex);
  return match ? match[1] : undefined;
}
function escapeStringRegexp(string: string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
