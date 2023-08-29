"use client";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTubeEmbed from "./YouTubeEmbed";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function YoutubeCarousel() {
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
    <div className="relative mx-auto justify-center">
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
        className="embla__viewport carousel h-[500px]  items-center justify-start scroll-smooth scrollbar-hide  rounded-3xl shadow-lg shadow-purple-800/50"
        ref={emblaRef}
      >
        <div
          className="embla__container flex space-x-4 mx-2"
          style={{ width: 550 }}
        >
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed vnum={0} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed vnum={1} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed vnum={2} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed vnum={3} />
          </div>
          <div className="embla__slide w-full  shadow-purple-800/50">
            <YouTubeEmbed vnum={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
