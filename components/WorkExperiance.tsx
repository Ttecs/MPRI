import React from "react";
import { motion } from "framer-motion";
import ExperianceCard from "./ExperianceCard";

type Props = {};

function WorkExperiance({}: Props) {
  const [experiance, setExperiance] = React.useState([]);
  React.useEffect(() => {
    fetch("https://63ecb6f8be929df00cb091c5.mockapi.io/experiance")
      .then((res) => res.json())
      .then((data) => setExperiance(data));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen snap-center flex relative overflow-hidden flex-col justify-center text-left md:flex-row max-w-full px-10 mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl top-0">
        Experiance
      </h3>
      <div className="w-full overflow-visible  justify-center flex-col md:flex-row lg:flex-row xl:flex-row md:mt-0 lg:mt-0 xl:mt-0 mt-20 scrollbar-track-rounded-lg scrollbar-thin  md:scrollbar-track-gray-400/20  md:scrollbar-thumb-yellow-500  flex space-x-5  overflow-x-scroll snap-x snap-mandatory">
        {experiance.length != 0
          ? experiance.map(
              (experiance) => (
                console.log(experiance.technologies),
                (
                  <ExperianceCard
                    companyImage={experiance.companyUrl}
                    technologies={experiance.technologies}
                    tasks={experiance.workedon}
                    role={experiance.role}
                    duration={experiance.time}
                    company={""}
                  />
                )
              )
            )
          : null}

        {/* experianceCard */}
      </div>
    </motion.div>
  );
}

export default WorkExperiance;
