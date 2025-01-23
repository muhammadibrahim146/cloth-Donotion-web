import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["One Life Changed", "One Smile", "Donation"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-[200px] md:h-[300px] lg:h-[400px]">
      <div className="h-full bg-orange-600 flex flex-col justify-center items-center">
        <h1
          className="text-center text-3xl md:text-4xl lg:text-5xl text-white mt-10 font-extrabold"
          data-aos="fade-up"
        >
          Spread Warmth{" "}
          <span className="text-blue-900 font-bold">{text}</span>{" "}
          One At A Time
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <input type=" text" className="w-[300px] h-[200px]"/>

      </div>
    </div>
  );
};

export default Hero;



