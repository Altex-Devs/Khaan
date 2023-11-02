import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TextAnimationType = {
  text: string;
  delay: number;
  ref: any;
  animate: any;
};

export const TextAnimation = ({
  text,
  delay,
  ref,
  animate,
}: TextAnimationType) => {
  const textArr = text.split("");
  let currentText = [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: any;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        currentText.push(textArr[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <div>
      {textArr.map((e) => {
        const variant = {
          visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
          hidden: { opacity: 0, x: 100 },
        };

        return (
          <>
            <motion.span
              variants={variant}
              initial="hidden"
              ref={ref}
              animate={animate}
            >
              {e}
            </motion.span>
          </>
        );
      })}
    </div>
  );
};
