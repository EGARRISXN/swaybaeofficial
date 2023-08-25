"use client";
import { AnimatePresence } from "framer-motion";

export const Transition = ({ children }) => (
  <>
    <AnimatePresence>{children}</AnimatePresence>
  </>
);
