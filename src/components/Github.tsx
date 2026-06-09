"use client";

import { bricolage_grotesque } from "@/lib/font";
import Link from "next/link";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr: false,
  }
);

export default function Github() {
  return (
    <div className="hidden md:flex flex-col items-center py-12 gap-6 w-full">
      <h1 className={`text-2xl font-medium ${bricolage_grotesque}`}>
        GitHub Contributions
      </h1>

      <Link
        href="https://github.com/mohammedniyafsm"
        target="_blank"
        className="w-full flex justify-center"
      >
        <div className="overflow-x-auto">
          <GitHubCalendar
            username="mohammedniyafsm"
            colorScheme="dark"
            blockSize={10}
            blockMargin={3}
            fontSize={12}
          />
        </div>
      </Link>
    </div>
  );
}