import Image from "next/image";

export default function Hero() {
  return (
    <section className="items-center justify-center w-screen h-screen">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="py-40">
        <h1 className="text-4xl  sm:text-6xl md:text-6xl z-20 font-thin text-center text-gap antialiased">
          Explore
          <br /> Astronomy
        </h1>
        <div className="flex items-center justify-center">
          <Image src="/images/moon2.jpg" alt="moon" width={600} height={600} />
        </div>
      </div>
    </section>
  );
}
