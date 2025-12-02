"use client";
import { bricolage_grotesque } from "@/lib/font";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  return (
    <div className="md:block hidden flex flex-col items-center py-16 gap-8">
      <h1 className={`text-2xl font-semibold ${bricolage_grotesque}`}>GitHub Contributions</h1>
      <div className="cursor-pointer">
        <Link href={"https://github.com/mohammedniyafsm"} >
      <GitHubCalendar 
        username="mohammedniyafsm" 
        colorScheme="dark" 
      /> </Link></div>
     
    </div>
  );
}
