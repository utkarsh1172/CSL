import Image from "next/image";

import type { StoryVideo } from "@/types/success-story";

type VideoCardProps = {
  video: StoryVideo;
};

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
    </svg>
  );
}

/** Podcast thumbnail with a pulsing play badge; links out when the episode has a URL. */
export function VideoCard({ video }: VideoCardProps) {
  const content = (
    <>
      <Image alt={video.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 320px" src={video.imageSrc} />
      <span aria-hidden="true" className="video-card__play">
        <PlayIcon />
      </span>
      <span className="video-card__title">{video.title}</span>
    </>
  );

  return video.href ? (
    <a className="video-card" data-boom-click="" href={video.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  ) : (
    <div className="video-card">{content}</div>
  );
}
