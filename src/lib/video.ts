import { site } from "../config/site";

export type VideoKey = "main" | "walkthrough" | "teaser";

/** Props for <BrandVideo> from the video config. */
export function videoProps(key: VideoKey) {
  const video = site.video[key];
  return {
    src: video.src,
    poster: video.poster,
    captions: video.captions,
    title: video.title,
    durationLabel: video.duration,
  };
}
