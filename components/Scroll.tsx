"use client";
import {
  useScroll,
  motion,
  useSpring,
  useTransform,
  easeIn,
} from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 0],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  return (
    <motion.div
      style={{
        // scaleX: scrollYProgress,
        scaleX,
        transformOrigin: "left",
        // background: "blue",
        background,
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        height: "3px",
      }}
      transition={easeIn}
    >
      <div
        style={{
          maxWidth: "",
          margin: "auto",
          padding: "1.2rem",
        }}
      ></div>
    </motion.div>
  );
};

export default Scroll;
