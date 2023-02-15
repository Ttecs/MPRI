import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/sandakelum-bandara/"
          fgColor="#F7AB0A"
          bgColor="transparent"
          style={{ height: 65, width: 65 }}
        />
        <SocialIcon
          style={{ height: 65, width: 65, marginRight: 10 }}
          url="https://github.com/Ttecs"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ height: 35, width: 35 }}
          url="https://stackoverflow.com/users/11239515/tecs-x"
          bgColor="#F7AB0A"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#F7AB0A"
          bgColor="transparent"
        />
        <p className="text-gray-400 text-sm uppercase hidden md:inline-flex ">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
