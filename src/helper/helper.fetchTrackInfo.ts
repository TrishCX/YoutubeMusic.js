import { formatNumbers, formatTime } from "../others";

export function fetchTrackInfo(data: any) {
  const videoDetails = data?.videoDetails;
  const microFormat = data?.microformat.playerMicroformatRenderer;

  const label = formatNumbers(videoDetails.viewCount) as string;
  const durationLabel = formatTime(microFormat.lengthSeconds);

  const initialDate = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "2-digit",
    day: "2-digit",
  }).format(new Date(microFormat?.publishDate));
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  }).format(new Date(microFormat?.publishDate));

  const cleaner = {
    title: videoDetails.title,
    description: videoDetails.shortDescription,
    keywords: videoDetails.keywords,
    videoId: videoDetails.videoId,
    author: {
      name: videoDetails.author,
      id: videoDetails.channelId,
    },
    thumbnail: videoDetails.thumbnail?.thumbnails,
    views: {
      label,
      initial: videoDetails.viewCount,
    },
    duration: {
      label: durationLabel,
      initial: microFormat.lengthSeconds,
    },
    date: {
      formatted: formattedDate,
      initial: initialDate,
    },
    embed: microFormat.embed,
    category: microFormat?.category,
  };
  return cleaner;
}
