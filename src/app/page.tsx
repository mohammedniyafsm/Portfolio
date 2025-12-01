import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Github from "@/components/Github";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import ProofOfWoork from "@/components/ProofOfWoork";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background w-screen h-screen flex justify-center ">
        <div className="w-[900px] h-screen border-[#ffffff1f]">
          <Navbar />
          <Landing />
          <ProofOfWoork />
          <Experience/>
          <Github />
          <Skills />
          <Education />
          <Contact />
        </div>
    </div>
  );
}
