import React from "react";
import { motion } from "framer-motion";

type Data = {
  image: string;
  name: string;
  description: string;
  link: string;
};

function Projects({}: Data) {
  const [projects, setProjects] = React.useState<Data[]>([]);
  //fetch data from https://63ecb6f8be929df00cb091c5.mockapi.io/projects
  React.useEffect(() => {
    fetch("https://63ece9f9be929df00cb50371.mockapi.io/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  // const projects = [
  //   {
  //     "name": "Vvisit",
  //     "description":
  //       "Web application and mobile application to support travellers to make their own itinerary including all the tasks which is suitable for personal preferences and budget. ",
  //     "image":
  //       "https://github.com/Ttecs/ttecsprofile/blob/main/Vvisit.png?raw=true",
  //     "link": "https://vvisitfrontend.azurewebsites.net/",
  //   },
  //   {
  //     "name": "momen",
  //     "description":
  //       "A system to manage daily tasks from a web app can be implemented using a combination of front-end and back-end technologies. Here's an example of how to implement a simple system that allows users to create, view, and complete daily tasks.",
  //     "image":
  //       "https://github.com/Ttecs/ttecsprofile/blob/main/Capture.PNG?raw=true",
  //     "link": "https://www.linkedin.com/posts/sandakelum-bandara_momen-reactnative-reactjs-activity-6809946667496943616-iPZ_?utm_source=share&utm_medium=member_desktop",
  //   },
  //   {
  //     "name": "Umbrella dryer and locker",
  //     "description":
  //       "It includes many features to dry wet umbrellas and to secure each umbrella until the customer is done shopping.Level 01 Hardware Project ",
  //     "image":
  //       "https://media.licdn.com/dms/image/C5622AQFqLGvFRqLA1w/feedshare-shrink_1280/0/1592499762468?e=1679529600&v=beta&t=VSAXtz-gjdkacd4fqJyV9ECq5lvvda3tmJX4q-LtKrA",
  //     "link": "https://www.linkedin.com/posts/sudam-yasodya_programming-avr-teamwork-activity-6679428325628346368-GDxJ?utm_source=share&utm_medium=member_desktop",
  //   },
  // ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl justify-center xl:space-y-0 top-0">
        Projects
      </h3>
      <div className="relative scrollbar-thin  md:scrollbar-track-gray-400/20  md:scrollbar-thumb-yellow-500 scrollbar-track-rounded-lg w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20">
        {/* projects */}
        {projects.map((project) => (
          <div className="flex  snap-center flex-shrink-0 flex-col h-screen p-20 justify-center items-center w-[600px] space-y-5">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src={project.image}
              alt=""
              className="w-60 h-60"
            />
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="text-gray-300 text-lg text-center md:text-left">
              {project.description}
            </p>
            <a href={project.link} className="text-[#F7AB0A]">
              see more
            </a>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
