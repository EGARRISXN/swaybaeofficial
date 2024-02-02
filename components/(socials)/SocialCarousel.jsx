"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SocialCard from "@/components/(socials)/SocialCard";
import { socialMediaData } from "@/utils/socialMediaData";

export default function SocialCarousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="flex flex-row justify-center items-center text-center py-8">
      <button
        onClick={scrollLeft}
        className="flex justify-start p-2 rounded-full bg-base-200 border-base-content border-2"
      >
        <FiChevronLeft />
      </button>
      <div
        id="content"
        className="carousel flex overscroll-auto border-1 rounded-2xl shadow-md"
      >
        {socialMediaData.map((data, index) => (
          <SocialCard key={index} {...data} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="flex justify-end p-2 rounded-full bg-base-200 border-base-content border-2"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
