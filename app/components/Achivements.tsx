import Image from "next/image";

export default function Achivements() {
  return (
    <section className="py-20">
      <div>
        <div>
          <h1 className="text-center text-3xl pb-10">Our Achievments</h1>
        </div>
        <div className="lg:block md:block sm:block hidden">
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <div className="w-64 h-64">
              <Image
                src="/assets/Picture1.jpg"
                alt="logo"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <div className="w-64 h-64">
              <Image
                src="/assets/Picture2.jpg"
                alt="logo"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <div className="w-64 h-64">
              <Image
                src="/assets/Picture3.jpg"
                alt="logo"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <div className="w-64 h-64">
              <Image
                src="/assets/Picture4.jpg"
                alt="logo"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="lg:block md:block sm:block hidden py-10">
            <div className="flex items-center justify-center">
              <button className="bg-sky-600 px-10 py-4 rounded-md">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden sm:hidden block">
          <div className="flex items-center flex-wrap  justify-center">
            <div className="flex gap-4 mb-4">
              <div className="w-36 h-36">
                <Image
                  src="/assets/Picture1.jpg"
                  alt="logo"
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>
              <div className="w-36 h-36">
                <Image
                  src="/assets/Picture2.jpg"
                  alt="logo"
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-36 h-36">
                <Image
                  src="/assets/Picture3.jpg"
                  alt="logo"
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>
              <div className="w-36 h-36">
                <Image
                  src="/assets/Picture4.jpg"
                  alt="logo"
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden sm:hidden block py-10">
          <div className="flex items-center justify-center">
            <button className="bg-sky-600 px-10 py-4 rounded-md">
              See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
