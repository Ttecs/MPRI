import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Data = {
  url: string;
  percentage: string;
};

function Skills({}: Data) {
  const [skills, setSkills] = React.useState<Data[]>([]);
  //fetch data from https://63ecb6f8be929df00cb091c5.mockapi.io/technologies
  React.useEffect(() => {
    fetch("https://63ecb6f8be929df00cb091c5.mockapi.io/technologies")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative flex-col justify-center md:text-left xl:flex-row min-h-screen text-center items-center  xl:space-y-0 mx-auto"
    >
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl justify-center xl:space-y-0 top-0">
        Skills
      </h3>
      <h3 className="absolute top-14 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profficiency
      </h3>

      <div className="grid grid-cols-4  gap-5">
        {skills.length != 0
          ? skills.map((skill) => (
              <Skill image={skill.url} percentage={skill.percentage} />
            ))
          : null}
      </div>
    </motion.div>
  );
}

export default Skills;
