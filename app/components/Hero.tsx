"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <section>
      <div className="lg:block">
        <div
          style={{
            backgroundImage: "url('/images/mars.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="background"
        >
          <div>
            <div className="flex items-end justify-end">
              <Image
                src="/images/asteroid.png"
                alt="asteroid"
                width={150}
                height={150}
                className="asteroid-animation"
              />
            </div>
            <div>
              <h1 className="text-4xl animated sm:text-6xl md:text-6xl font-sm text-center text-gap antialiased">
                Explore
                <br /> Astronomy
              </h1>
            </div>
          </div>
          <div className="fixed bottom-10 right-10">
            <div className="w-20 h-20 flex justify-center items-cente">
              <button onClick={toggleChat}>
                <Image
                  src="/images/chatbot.png"
                  alt="chatbot"
                  width={150}
                  height={150}
                  className="w-full cursor-pointer z-50 shadow-purple-600"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
