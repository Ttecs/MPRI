import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" h-screen snap-center flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-1 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" -mb-20 md:mb-0 flex-shrink-0 object-cover object-center rounded-full h-56 w-56 md:h-96 md:w-80 md:rounded-lg xl:w-[500px] xl:h-[600px] xl:-mt-20 "
        src="https://github.com/Ttecs/ttecsprofile/blob/main/about_profile.jpg?raw=true"
      />
      <div className="space-y-10 px-0 md:px-10 -mt-20">
        <h4 className="text-4xl font-semibold font-light">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p>
          Hey there! 👋 My name is Tharaka Bandara and I'm an undergraduate
          student studying Information Technology 🎓 at the University of
          Moratuwa. I'm passionate about web development 🌐 using React and
          .NET, as well as mobile development 📱 with React Native. I consider
          myself a hardworking and detail-oriented individual 💪, with strong
          communication skills that allow me to connect with others effectively
          💬. When I'm not coding 💻, you can find me gaming 🎮 or pursuing
          knowledge in various areas 📚. It's great to meet you! 😊
        </p>
      </div>
    </motion.div>
  );
}

export default About;
