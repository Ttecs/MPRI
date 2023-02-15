import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-red-500 rounded-full h-[550px] w-[550px] mt-52 animate-pulse" />
      <div />
    </div>
  );
}

export default BackgroundCircles;
