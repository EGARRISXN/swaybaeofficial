"use client";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTubeEmbed3 from "./YouTubeEmbed3";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function NewYoutubeCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    draggable: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="relative px-4 flex border-[6px] rounded-3xl border-base-content shadow-purple-800/50">
      <div className="absolute right-0 top-0">
        <button
          onClick={scrollPrev}
          className="p-2 m-2 rounded-full bg-transparent border-secondary border-4"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 m-2 rounded-full bg-transparentv border-primary border-4"
        >
          <FiChevronRight />
        </button>
      </div>
      <div
        className="embla__viewport carousel h-[500px] items-center justify-start scroll-smooth scrollbar-hide"
        ref={emblaRef}
        style={{ width: 355 }}
      >
        <div
          className="embla__container flex space-x-4 px-2"
          style={{ width: 355 }}
        >
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed3 vnum={0} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed3 vnum={1} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed3 vnum={2} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed3 vnum={3} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed3 vnum={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
