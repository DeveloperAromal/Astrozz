import Image from "next/image";

export default function Incharge() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 lg:pl-40">
          <div className="text-center mb-4 lg:hidden md:hidden block">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-purple-300">
              Department
            </h1>
          </div>
          <div className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full bg-purple-800 flex items-center justify-center">
            {/* <Image
              src="/images/telescope.jpg"
              alt="Telescope"
              width={640}
              height={640}
              className="rounded-full object-cover"
            /> */}
            <div>
              <h1 className="text-center text-3xl">Sajna mohan</h1>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-4">
          <div className="text-center mb-8 lg:block md:block hidden">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-purple-300 ">
              Department
            </h1>
          </div>
          <div className="lg:pl-20 lg:block md:block hidden">
            <p className="text-gray-300 text-justify max-w-screen-md text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              distinctio minus illo nisi omnis pariatur excepturi magnam numquam
              recusandae maiores error possimus aut, alias nostrum placeat,
              repellendus assumenda, odio nulla. Veniam assumenda fugiat
              repellendus distinctio nesciunt qui atque officia in ad quod illo
              temporibus obcaecati alias excepturi quis officiis voluptatum
              maiores suscipit exercitationem, explicabo doloribus. Illum enim.
              repellendus distinctio nesciunt qui atque officia in ad quod illo
              temporibus obcaecati alias excepturi quis officiis voluptatum
              maiores suscipit exercitationem, explicabo doloribus. Illum enim.
              temporibus obcaecati alias excepturi quis officiis voluptatum
              maiores suscipit exercitationem, explicabo doloribus. Illum enim.
              explicabo doloribus. Illum enim.
            </p>
          </div>
          <div className="lg:pl-20 lg:hidden md:hidden block">
            <p className="text-gray-300 text-justify max-w-screen-md text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              distinctio minus illo nisi omnis pariatur excepturi magnam numquam
              recusandae maiores error possimus aut, alias nostrum placeat,
              repellendus assumenda, odio nulla. Veniam assumenda fugiat
              repellendus distinctio nesciunt qui atque officia in ad quod illo
              temporibus obcaecati alias excepturi quis officiis voluptatum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
