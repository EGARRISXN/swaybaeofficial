"use client";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTubeEmbed from "./YouTubeEmbed";

export const YouTubeCarousel1 = () => {
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
    <div className="embla card flex overflow-hidden p-4 bg-base-200 w-full shadow-xl shadow-purple-800/50">
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container flex h-full mx-auto space-x-10"
          style={{ width: 500 }}
        >
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={0} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={1} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={2} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={3} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={4} />
          </div>
        </div>
      </div>
      <div className="card-actions pt-4 space-x-10 justify-center">
        <button
          className="btn btn-secondary embla__button embla__button--prev"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="btn btn-secondary embla__button embla__button--next"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
