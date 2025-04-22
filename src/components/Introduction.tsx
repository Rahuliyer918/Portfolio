import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white flex justify-start px-6 py-16">
        <div className="max-w-4xl text-left">
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 text-cyan-400 monsieur-la-doulaise-regular">
            Introduction
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed monsieur-la-doulaise-regular">
            I am a skilled C# .NET developer with extensive experience creating enterprise-level solutions using ASP.NET Core MVC, Entity Framework, and Web API. I led development for Subway's Gift Card Payment system, where I implemented secure C# transaction processing across 25,000+ locations and performed comprehensive regression testing across 200+ test cases. My expertise in C# extends to developing full-stack e-commerce platforms with secure authentication systems and data access layers. I've crafted efficient business logic using C# LINQ queries and asynchronous programming patterns to optimize performance. Beyond my C# focus, I complement my development toolkit with experience in MongoDB, React, Python for data analysis, and containerization technologies, allowing me to contribute effectively across various aspects of the development lifecycle while delivering reliable software solutions.
            </p>
        </div>
    </section>

  );
};

export default Introduction;
