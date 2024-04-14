import Image from "next/image";

export default function () {
  return (
    <section className="py-20">
      <div>
        <div>
          <h1 className="text-center pb-20 text-3xl font-bold">Our Hourners</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div>
            <div className="w-64 h-64 rounded-full bg-purple-700">
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
            <div className="w-64 h-64 rounded-full bg-purple-700">
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
        </div>
      </div>
    </section>
  );
}
