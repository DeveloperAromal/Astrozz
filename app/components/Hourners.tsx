import Image from "next/image";

export default function () {
  return (
    <section className="py-10">
      <div>
        <div>
          <h1 className="text-center pb-20 text-3xl font-bold">Our Hourners</h1>
        </div>
        <div>
          <Image
            src="/assets/commet.png"
            alt="telescope"
            width={120}
            height={120}
            className="animation1 absolute left-24"
          />
        </div>
        <div>
          <Image
            src="/assets/commet.png"
            alt="telescope"
            width={120}
            height={120}
            className="animation2 absolute right-44"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div>
            <Image
              src="/assets/meteor1.png"
              alt="telescope"
              width={120}
              height={120}
              className="animation4 absolute left-0"
            />
          </div>
          <div>
            <div className="w-64 h-64 rounded-full">
              <Image
                src="/assets/rock.png"
                alt="telescope"
                width={300}
                height={300}
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <h3 className="text-center text-2xl pt-4">Rock</h3>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/assets/asteroid.png"
                alt="telescope"
                width={120}
                height={120}
                className="animation5 absolute right-0"
              />
            </div>
            <div className="w-64 h-64 rounded-full">
              <Image
                src="/assets/rock.png"
                alt="telescope"
                width={300}
                height={300}
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <h3 className="text-center text-2xl pt-4">Rock</h3>
            </div>
          </div>
          <div>
            <Image
              src="/assets/commet.png"
              alt="telescope"
              width={120}
              height={120}
              className="animation2 absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
