import Image from "next/image";
import { Briefcase } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-white border-b-2 border-black flex items-center justify-between px-6 py-4 fixed top-0 w-full z-10">
      <div className="flex items-center space-x-2">
        <Briefcase size={24} className="text-black" />
        <span className="text-xl font-bold tracking-tight text-black">
          SHIGOTO
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
          <Image
            src="/Chibi.jpg"
            width={200}
            height={200}
            alt="Profile Image"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
