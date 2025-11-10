import { ChefHat } from "lucide-react";
import React from "react";

const Hero = ({ children }) => {
  return (
    <div>
      <h2
        className={`bg-[url(/title-bg.png)] flex justify-center items-center gap-1 text-4xl font-bold text-center bg-no-repeat pb-20 pt-10 bg-center`}
        style={{ backgroundSize: "100% 100%" }}
      >
        <ChefHat size={40}></ChefHat>
        {children}
      </h2>
    </div>
  );
};

export default Hero;
