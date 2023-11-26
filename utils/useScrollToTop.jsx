"use client";
import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function useScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const scrollToTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", scrollToTop);

    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, [showScroll]);

  return (
    <>
      <FiChevronUp
        className="scrollToTop border-2 bg-base-200 border-base-content rounded-full"
        onClick={backToTop}
        style={{
          height: 40,
          width: 40,
          position: "fixed",
          right: 20,
          bottom: 20,
          display: showScroll ? "flex" : "none",
          padding: 10,
          cursor: "pointer",
        }}
      />
    </>
  );
}
