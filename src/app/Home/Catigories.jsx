'use client'

import { catigoriesData } from "./utils/cartigoryData";
import { useState } from "react";

const Catigories = () => {
  const [catigories, setCatigories] = useState(catigoriesData);
  return (
    <>
      <section className="mt-10">
        <div className="grid grid-cols-4 justify-between gap-2 items-center">
          {catigories.map((cati, index) =>{
            const {icon, name} = cati
            return <div key={index} className="flex flex-col items-center justify-center gap-2 border text-blackShades-200 rounded p-2 hover:bg-redShades-200 hover:text-white-200 cursor-pointer">
            <span className="text-6xl">{icon}</span>
            <p>{name}</p>
            </div>
          })}
        </div>
      </section>
    </>
  );
};

export default Catigories;
