import { USER_AGENTS } from "../constants/user-agents";

interface IOptions {
  mobile?: boolean;
  desktop?: boolean;
}

export function getHeaders(options: IOptions) {
  const availableAgents = USER_AGENTS[options.mobile ? "mobile" : "desktop"];
  const ua =
    availableAgents[Math.floor(Math.random() * availableAgents?.length)];
  return {
    accept: "text/html",
    "accept-encoding": "gzip, deflate",
    "accept-language": "en-US,en",
    referer: "https://www.google.com/",
    "upgrade-insecure-requests": 1,
    "user-agent": ua,
  };
}
