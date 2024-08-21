"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Navbar from "./Navbar";
import Profile from "./Profile";

export function AuroraBackgroundDemo({children}) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full flex flex-col px-2"
      > 
        <Navbar/>
        <div className="flex w-full">
          {children}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
