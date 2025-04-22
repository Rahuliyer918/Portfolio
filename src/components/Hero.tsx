import React from 'react';
import Lottie from 'lottie-react';
import developerAnimation from '../assets/hero.json'; // path to your animation JSON

const Hero = () => {
  return (
    <section id='hero' className="bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-teal-100 min-h-screen flex flex-col md:flex-row items-center justify-center text-left p-8 gap-10">
      <div className="flex-1">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hi, I'm Rahulnarayan,</h1>
        <p className="mt-3 text-justify text-lg max-w-4xl leading-[30px] mb-6">
          I specialize in developing robust applications using C# and .NET, emphasizing clean code and efficient design patterns. With over 2.5 years of experience, I aim to create high-quality software that improves user experience and system performance.
        </p>
      </div>

      <div className="flex-1 max-w-2xl">
        <Lottie animationData={developerAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
