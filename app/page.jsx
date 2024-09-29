import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FinDownload } from "react-icons/fi"; 


import { icons } from "lucide-react";
export default function Home() {
  return (
  
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flew-row itesms-center justify-between xl:pt-9 xl:pb-24">
        <div className="text-center xl:text-left ">
        <span>Software Developer</span>
        <h1 className="h1">Hello I'm <br></br><span className="text-accent" >Sarvesh Patil</span>  </h1> 
        <p className="max-w-[1000px] mb-9 text-white" >A passionate Computer Science student, <br></br>
         With experience leading tech initiatives and empowering new developers. <br></br>
         I specialize in  full-stack development, open-source contributions and building inclusive tech communities.<br></br>
         I'm committed to fostering innovation and collaboration in the world of technology.</p>
        </div>
      <div>photo</div> 
      </div>    
    </div>
    </section>
  
  );
}
