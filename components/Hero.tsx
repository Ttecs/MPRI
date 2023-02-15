import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    loop: true,

    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 2000,
    words: ["Hey", "I'm Ttecs", "<Love to code/>", "<Love to learn/>"],
  });
  return (
    <div className="h-screen snap-start flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="rounded-full h-40 w-40 relative mx-auto "
        src="https://media.licdn.com/dms/image/D5603AQHp7_P8LUq2xw/profile-displayphoto-shrink_800_800/0/1673722409257?e=1681948800&v=beta&t=SH44kEMWfxXpEAARYOYacX7eWpRglzi2R4IcnlzuQts"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 flex">
          <Link href="#about">
            <button className="herroButton">About</button>
          </Link>
          <Link href="#experiance">
            <button className="herroButton">Experiance</button>
          </Link>
          <Link href="#skills">
            <button className="herroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
