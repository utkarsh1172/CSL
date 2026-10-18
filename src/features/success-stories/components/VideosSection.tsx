import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExpandableList } from "@/components/ui/ExpandableList";
import type { SuccessStoriesContent } from "@/types/success-story";

import { VideoCard } from "./VideoCard";

type VideosSectionProps = {
  videos: SuccessStoriesContent["videos"];
};

export function VideosSection({ videos }: VideosSectionProps) {
  const { heading } = videos;

  return (
    <section aria-labelledby="videos-heading" className="success-block success-block--ruled" id="videos">
      <SectionHeading
        accent={heading.accent}
        align="start"
        className="section-heading--large section-heading--light"
        description={heading.description}
        eyebrow={heading.eyebrow}
        id="videos-heading"
        title={heading.title}
      />
      <ExpandableList
        className="video-grid"
        items={videos.items.map((video) => ({
          key: video.title,
          node: <VideoCard video={video} />,
        }))}
        moreLabel="View More"
        withArrow
      />
    </section>
  );
}
