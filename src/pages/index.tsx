import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import WorkExperiance from "components/WorkExperiance";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-full scrollbar-thin scrollbar-track-gray-400 overflow-y-scroll overflow-x-hidden scrollbar-thumb-yellow-500 text-white  z-0  ">
      <Head>
        <title>Ttecs-X</title>
      </Head>
      {/* Header */}
      <Header />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Experiance */}
      <section id="experiance">
        <WorkExperiance
          id={0}
          companyUrl={""}
          technologies={[]}
          workedon={[]}
          role={""}
          time={""}
          company={""}
        />
      </section>
      {/* Skills  */}
      <section id="skills">
        <Skills url={""} percentage={""} />
      </section>
      {/* Projects */}
      <section id="projects">
        <Projects image={""} name={""} description={""} link={""} />
      </section>
      {/* contact me */}
      <section id="contact">
        <ContactMe name={""} email={""} message={""} subject={""} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/57471664?v=4"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
