"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipTrigger, TooltipContent } from "../components/ui/tooltip";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", onClick: () => router.push("/") },
    { label: "About" },
    { label: "Projects", onClick: () => router.push("/projects") },
  ];

  const socialIcons = [
    {
      name: "Resume",
      href: "/mohammedniyaf.pdf",
      download: true,
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
        />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/mohammedniyafsm",
      target: "_blank",
      icon: (
        <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
      />
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/n1yaf_/",
      target: "_blank",
      icon: (
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-niyaf-s-m-692801259/",
      target: "_blank",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
        />
      ),
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed z-50 top-0 left-1/2 -translate-x-1/2 bg-background w-full max-w-[900px] min-h-14 border border-[#ffffff1f] items-center justify-between">
        {/* ---------------- Left Section ---------------- */}
        <div className="flex">
          {/* Brand */}
          <div className="border min-h-14 border-[#ffffff1f] px-6 flex items-center">
            <h1 className="font-sans font-light text-xl">Niyaf.dev</h1>
          </div>

          {/* Nav Items */}
          {navItems.map((item) => (
            <div
              key={item.label}
              className="border min-h-14 border-[#ffffff1f] px-4 flex items-center"
            >
              <h1
                onClick={item.onClick}
                className={`font-sans font-light text-sm cursor-pointer ${
                  item.onClick ? "" : "cursor-default"
                }`}
              >
                {item.label}
              </h1>
            </div>
          ))}

          {/* Resume */}
          <div className="border min-h-14 border-[#ffffff1f] px-4 flex items-center">
            <a
              href="/mohammedniyaf.pdf"
              download
              className="font-sans font-light text-sm cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* ---------------- Right Section (Icons) ---------------- */}
        <div className="flex px-6 lg:px-10 gap-4 lg:gap-6 items-center text-black dark:text-white">
          {socialIcons.map((icon) => (
            <Tooltip key={icon.name}>
              <TooltipTrigger asChild>
                <Link
                  href={icon.href}
                  download={icon.download}
                  target={icon.target}
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 15 15" fill="currentColor">
                    {icon.name === "Twitter" ? (
                      <svg viewBox="0 0 512 512" fill="currentColor">
                        {icon.icon}
                      </svg>
                    ) : (
                      icon.icon
                    )}
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="z-[9999]">{icon.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed z-50 top-0 w-full bg-background border-b border-[#ffffff1f]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 min-h-14">
          {/* Brand */}
          <div className="flex items-center">
            <h1 className="font-sans font-light text-xl">Niyaf.dev</h1>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[#ffffff0a] rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-[#ffffff1f] bg-background">
            {/* Navigation Items */}
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#ffffff1f] px-4 py-3"
                >
                  <h1
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick();
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`font-sans font-light text-base ${
                      item.onClick ? "cursor-pointer hover:text-primary transition-colors" : ""
                    }`}
                  >
                    {item.label}
                  </h1>
                </div>
              ))}

              {/* Resume */}
              <div className="border-b border-[#ffffff1f] px-4 py-3">
                <a
                  href="/mohammedniyaf.pdf"
                  download
                  className="font-sans font-light text-base cursor-pointer hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 px-4 py-6 border-t border-[#ffffff1f]">
              {socialIcons.map((icon) => (
                <Link
                  key={icon.name}
                  href={icon.href}
                  download={icon.download}
                  target={icon.target}
                  className="hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={icon.name}
                >
                  <svg className="w-6 h-6" viewBox="0 0 15 15" fill="currentColor">
                    {icon.name === "Twitter" ? (
                      <svg viewBox="0 0 512 512" fill="currentColor">
                        {icon.icon}
                      </svg>
                    ) : (
                      icon.icon
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-14 md:h-[56px]" />
    </>
  );
}