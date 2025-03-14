"use client";

import Link from "next/link";
import { useRef } from "react";
const ips = require("ips.js");

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // TODO:
  // Add a Python or Go webscraper to the project that scrapes the links
  // from this site:
  // https://ia601904.us.archive.org/view_archive.php?archive=/0/items/rom-hack-patch-archive/SNES-SFC%20Hacks%201.7z

  // We would then need to dump the links into a JSON file, and then access it
  // on the frontend
  
  // This is to avoid CORS bs issues

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-red-500">ROMHACKING.NET ROM PATCHER</h1>
        <h2>This project aims to give power back to the masses to make rom hacking easy again by allowing you to pick from a list of available rom hacks found here for convenience purposes:</h2>
        <h2><Link href="https://archive.org/details/rom-hack-patch-archive">https://archive.org/details/rom-hack-patch-archive</Link></h2>
        <form>
          <input 
            ref={fileInputRef} 
            type="file" 
            name="RomFileUpload" 
            className="absolute right-[9999px]" 
            onChange={e => { 
              const file = e.target.files?.[0];
              console.log(file);
              if (!file) {
                console.log("No file selected!");
                return;
              }

              const reader = new FileReader();

              reader.onload = function(event) {
                if (event.target?.result) {
                  console.log("File content as Base64:", event.target.result);
                }
              };
              reader.readAsDataURL(file);
            }}
          />
          <button 
            type="button" 
            className="bg-blue-500 px-4 py-2 text-white rounded-sm self-center font-semibold" 
            onClick={() => { fileInputRef.current?.click()}}>
              Upload Your ROM
          </button>
          <button type="submit"></button>
        </form>
      </main>
    </div>
  );
}
