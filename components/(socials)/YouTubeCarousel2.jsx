"use client";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTubeEmbed2 from "./YouTubeEmbed2";

export const YouTubeCarousel2 = () => {
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
    <div
      className="card flex px-4 overflow-hidden items-center w-full border-[6px] border-base-content rounded-2xl shadow-xl shadow-purple-800/50"
      style={{ width: 1024 }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div
          className="embla__container flex h-full space-x-10"
          style={{ width: 720 }}
        >
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed2 vnum={0} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed2 vnum={1} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed2 vnum={2} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed2 vnum={3} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed2 vnum={4} />
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

// "use client";
// import { useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import YouTubeEmbed2 from "./YouTubeEmbed2";

// export const YouTubeCarousel2 = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "center",
//     draggable: true,
//   });

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes());
//     }
//   }, [emblaApi]);

//   return (
//     <div className="embla card flex overflow-hidden p-4 bg-base-200 w-full shadow-xl shadow-purple-800/50">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div
//           className="embla__container flex h-full space-x-10"
//           style={{ width: 360 }}
//         >
//           <div className="embla__slide flex h-full w-full">
//             <YouTubeEmbed2 vnum={0} />
//           </div>
//           <div className="embla__slide flex h-full w-full">
//             <YouTubeEmbed2 vnum={1} />
//           </div>
//           <div className="embla__slide flex h-full w-full">
//             <YouTubeEmbed2 vnum={2} />
//           </div>
//           <div className="embla__slide flex h-full w-full">
//             <YouTubeEmbed2 vnum={3} />
//           </div>
//           <div className="embla__slide flex h-full w-full">
//             <YouTubeEmbed2 vnum={4} />
//           </div>
//         </div>
//       </div>
//       <div className="card-actions pt-4 space-x-10 justify-center">
//         <button
//           className="btn btn-secondary embla__button embla__button--prev"
//           onClick={scrollPrev}
//         >
//           Prev
//         </button>
//         <button
//           className="btn btn-secondary embla__button embla__button--next"
//           onClick={scrollNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
