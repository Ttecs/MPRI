import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { DiReact, DiFirebase } from "react-icons/di";
type Props = {
  technologies: Tech[];
  tasks: Tech[];
  company: string;
  duration: string;
  role: string;
  companyImage: string;
};
type Tech = {
  URL: string;
  task: string;
};

function ExperianceCard({
  technologies,
  company,
  duration,
  role,
  tasks,
  companyImage,
}: Props) {
  return (
    <article className="bg-[#292929] cursor-pointer transition-opacity overflow-hidden duration-200 opacity-80 p-10 hover:opacity-100 snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px]  mt-10 md:w-[500px] xl:w-[500px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-32 h-32 rounded-full object-cover object-top"
        src={companyImage}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{role}</h4>
        <p className="font-bold text-2xl mt-1">{duration}</p>
        <div className="flex space-x-2 my-2">
          {technologies.map((tech) => {
            console.log("technolo", tech.URL);

            return (
              <img
                className="w-10 h-10 rounded-full object-cover object-top"
                src={tech.URL}
                alt=""
              />
            );
          })}

          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          {tasks.map((task) => {
            return <li>{task.task}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperianceCard;
