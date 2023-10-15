export function extractJavaScriptContent(input: string): string {
  const withoutHtml = input.replace(/<[^>]*>/g, "");

  const withoutScripts = withoutHtml
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\s*googletag\.cmd\.push\(function\(\) \{[^\}]*\}\);?\s*/g, "\n");

  return withoutScripts;
}
