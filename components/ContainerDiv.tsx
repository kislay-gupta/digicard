"use client";
import React from "react";
import SparklesCore from "./SparklesCore";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  divId: string;
  particleId?: string;
  children: React.ReactNode;
}
export const ContainerDiv = ({ divId, particleId, children }: Props) => {
  return (
    <div>
      <div
        id={divId}
        className="h-screen relative w-full bg-[#0D1117] flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="w-full absolute inset-0 h-screen ">
          {/* <SparklesCore
            id={particleId}
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}
        </div>
        <AnimatePresence>
          <motion.div
            className="z-50 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: [50, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
