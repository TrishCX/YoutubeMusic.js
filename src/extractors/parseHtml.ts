export async function parseHTML(url: string): Promise<string> {
  const request = await fetch(url);
  const response = (await request.text()) as string;
  return response;
}
