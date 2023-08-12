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
        className="scrollToTop"
        onClick={backToTop}
        style={{
          height: 45,
          width: 45,
          borderRadius: 50,
          position: "fixed",
          right: 50,
          bottom: 50,
          display: showScroll ? "flex" : "none",
          padding: 5,
        }}
      />
    </>
  );
}
