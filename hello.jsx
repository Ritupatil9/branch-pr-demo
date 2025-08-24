"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState } from "react";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) scale(1)");
  const [isHovered, setIsHovered] = useState(false);
  
  const onMouseEnter = () => {
    setTransform("perspective(1000px) rotateX(10deg) scale(0.95)");
    setIsHovered(true);
  };
  
  const onMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) scale(1)");
    setIsHovered(false);
  };

  return (
    <a
      className={cn(
        "relative group/pin z-10 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{ perspective: "1200px" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{ 
            transform,
            transformOrigin: "center center",
            transition: "transform 0.35s ease",
          }}
          className="relative w-full h-full flex items-center justify-center rounded-2xl shadow-[0_6px_12px_rgb(0_0_0/0.12)] transition-transform duration-300 overflow-visible"
        >
          <div className={cn("relative z-10 w-full h-full", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} hovered={isHovered} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
  hovered,
}: {
  title?: string;
  href?: string;
  hovered?: boolean;
}) => {
  return (
    <motion.div 
      className="pointer-events-none absolute inset-0 flex items-center justify-center z-[11]"
      initial={{ opacity: 0 }}
      animate={{ opacity: hovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* Title positioned at center and animating upward on hover */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: hovered ? -120 : 0, // Move upward when hovered
            opacity: hovered ? 1 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            delay: hovered ? 0.1 : 0
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: hovered ? 1 : 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            <a
              href={href}
              target={"_blank"}
              className="relative flex items-center z-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 py-2 px-6 ring-2 ring-white/20 shadow-2xl backdrop-blur-sm"
            >
              <span className="relative z-20 text-white text-sm font-bold inline-block tracking-wide">
                {title}
              </span>
              
              {/* Enhanced gradient underline */}
              <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full opacity-80"></span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-sm opacity-50 -z-10"></div>
            </a>
            
            {/* Arrow pointing down to the card */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
          </motion.div>
        </motion.div>

        {/* Rest of the component remains the same */}
        <motion.div
          style={{
            transformOrigin: "50% 0%",
            transformPerspective: 1000,
          }}
          animate={{
            rotateX: hovered ? 88 : 70,
            y: hovered ? -16 : 0,
            scale: hovered ? 0.85 : 1,
          }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </motion.div>
        
        {/* Line that emerges from the center of the card and extends downward */}
        <>
          {/* Blurred line */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-500 to-transparent w-px h-0 group-hover/pin:h-40 blur-[2px]"
            style={{ transformOrigin: 'top center' }}
          />
          {/* Non-blurred line */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-500 to-transparent w-px h-0 group-hover/pin:h-40"
            style={{ transformOrigin: 'top center' }}
          />
          {/* Dot with blur */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          {/* Dot without blur */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-300 w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
