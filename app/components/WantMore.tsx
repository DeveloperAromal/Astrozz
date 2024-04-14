"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SpaceData {
  text: string;
  images: {
    src: string;
    description: string;
  }[];
}

export default function WantMore() {
  const [data, setData] = useState<SpaceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dpsapi-two.vercel.app/root/space.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto">
        <div>
          <h1 className="text-center text-3xl text-white">Space week</h1>
        </div>
        <div className="flex gap-20 py-10 flex-wrap items-center justify-center">
          {data &&
            data.images.map((image, index) => (
              <div
                key={index}
                className="w-40 h-40 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
              >
                <Image
                  src={image.src}
                  width={250}
                  height={250}
                  className="rounded-md w-full h-full"
                  alt="week"
                />
                <div className="text-center rounded-md">
                  <h2 className="max-w-84 text-md lg:text-sm md:text-lg sm:text-lg text-white">
                    {image.description}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
