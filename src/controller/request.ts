export default class Request {
  public async get(uri: string, options?: RequestInit) {
    const request = await fetch(uri, { ...options });
    const response: any = await request.json();
    return response;
  }
  public async post(uri: string, body: any) {
    const request = await fetch(uri, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        origin: "https://music.youtube.com",
      },
    });
    const response: any = await request.json();
    return response;
  }
}
