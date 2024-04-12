import Image from "next/image";

export default function Hero() {
  return (
    <section className="items-center justify-center w-screen h-screen">
      <div className="py-40">
        <h1 className="text-5xl sm:text-6xl md:text-6xl z-20 font-light text-center text-gap antialiased">
          Explore
          <br /> Astronomy
        </h1>
        <div className="flex items-center justify-center">
          <Image src="/images/moon2.jpg" alt="moon" width={600} height={600} />
        </div>
        <div className="flex items-center justify-center  py-20">
          <div className="w-8 h-14 bg-slate-800 rounded-full flex items-center justify-center">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}
