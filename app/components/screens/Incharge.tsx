import Image from "next/image";

export default function Membership() {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/assets/blackholebg1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section className="flex gap-10 flex-wrap items-center justify-center py-10 lg:py-20 ">
          <div className="">
            <div className="w-80 h-80 hidden lg:block">
              <Image
                src="/assets/achu.jpg"
                alt="telescope"
                width={400}
                height={400}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <Image
                  src="/assets/commet.png"
                  alt="telescope"
                  width={120}
                  height={120}
                  className="ufo-animation absolute"
                />
              </div>
              <h1 className="text-center text-3xl font-bold text-sky-600">
                Department
              </h1>
              <div className="block lg:hidden">
                <div className="flex items-center justify-center py-8">
                  <div className="w-64 h-64">
                    <Image
                      src="/assets/achu.jpg"
                      alt="telescope"
                      width={400}
                      height={400}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-justify text-xl px-4 max-w-screen-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                quaerat tenetur error molestiae accusantium iure voluptas
                maiores, accusamus veritatis sequi aliquid nemo maxime explicabo
                deserunt. Assumenda veritatis consectetur, ducimus corrupti
                neque inventore esse? Suscipit, quos. Exercitationem minus
                voluptas rem voluptatum ex, ratione dolorem enim officiis a modi
                ipsa quibusdam accusantium neque aperiam consequatur incidunt
                veritatis repellat itaque cupiditate obcaecati perferendis
                corporis ipsam ducimus? Quidem ipsa quibusdam accusantium neque
                aperiam consequatur incidunt veritatis repellat itaque
                cupiditate obcaecati perferendis corporis ipsam ducimus? Quidem
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/assets/asteroid.png"
              alt="telescope"
              width={120}
              height={120}
              className="ufo-animation absolute"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
