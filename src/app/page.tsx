import ProofOfWoork from "@/components/ProofOfWoork";
import Landing from "../components/Landing/page";
import Experience from "@/components/Experience";
import Navbar from "@/components/NavbarNew";


export default function Home() {
  return (
    <div className="bg-background w-screen h-screen flex justify-center ">
      <Navbar />
      <div className="w-[900px] h-screen border-[#ffffff1f] z-20">
        <Landing />
      </div>
    </div>
  );
}
