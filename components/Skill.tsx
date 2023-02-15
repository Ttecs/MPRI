import React from "react";
import { ModuleDetectionKind } from "typescript";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  image: string;
  percentage: string;
};

function Skill({ directionLeft, image, percentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        //set src through Props as url
        src={`${image}`}
        className="rounded-full p-2 w-24 h-24 object-cover object-top transition duration-300 ease-in-out border-gray-500 filter md:h-28 md:w-28 group-hover:grayscale border xl:w-32 xl:h-32"
      />
      <div className="rounded-full z-0 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32">
        <div
          className="flex items-center justify-center h-full
        "
        >
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
