import Image from "next/image";
import Link from "next/link";

export default function Membership() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image
              src="/images/telescope.jpg"
              alt="Telescope"
              width={640}
              height={640}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-300">
              Join our Community
            </h1>
          </div>
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              distinctio minus illo nisi omnis pariatur excepturi magnam numquam
              recusandae maiores error possimus aut, alias nostrum placeat,
              repellendus assumenda, odio nulla. Veniam assumenda fugiat
              repellendus distinctio nesciunt qui atque officia in ad quod illo
              temporibus obcaecati alias excepturi quis officiis voluptatum
              maiores suscipit exercitationem, explicabo doloribus. Illum enim.
            </p>
          </div>
          <div className="text-center">
            <Link href="/community">
              <button className="px-8 py-4 bg-sky-600 text-white rounded-md hover:bg-sky-800 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out">
                Join Community
              </button>
            </Link>
          </div>
          <div className="box">naln</div>
        </div>
      </div>
    </section>
  );
}
