// import Image from "next/image";
// import Link from "next/link";

import Image from "next/image";
import Link from "next/link";

// export default function Membership() {
//   return (
//     <section className="py-20 bg-gray-800 text-white">
//       <div className="container mx-auto flex flex-wrap items-center justify-center">
//         <div className="w-full md:w-1/2 lg:w-1/3">
//           <div className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
//             <Image
//               src="/images/telescope.jpg"
//               alt="Telescope"
//               width={640}
//               height={640}
//               className="rounded-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-2/3 px-4">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold text-purple-300">
//               Join our Community
//             </h1>
//           </div>
//           <div className="text-center mb-8">
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
//               distinctio minus illo nisi omnis pariatur excepturi magnam numquam
//               recusandae maiores error possimus aut, alias nostrum placeat,
//               repellendus assumenda, odio nulla. Veniam assumenda fugiat
//               repellendus distinctio nesciunt qui atque officia in ad quod illo
//               temporibus obcaecati alias excepturi quis officiis voluptatum
//               maiores suscipit exercitationem, explicabo doloribus. Illum enim.
//             </p>
//           </div>
//           <div className="text-center">
//             <Link href="/community">
//               <button className="px-8 py-4 bg-sky-600 text-white rounded-md hover:bg-sky-800 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out">
//                 Join Community
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default function Hero() {
//   return (
//     <section>
//       <div>
//         <div
//           style={{
//             backgroundImage: "url('/assets/cosmic_dust.jpg')",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             minHeight: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           className=""
//         >
//           <div>
//             <h1 className="text-4xl animated sm:text-6xl md:text-6xl font-sm text-center text-gap antialiased">
//               Explore
//               <br /> Astronomy
//             </h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function CommunityJoin() {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('/assets/blackholebg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section className="flex gap-10 flex-wrap items-center justify-center py-20">
          <div>
            <div className="w-96 h-96">
              <Image
                src="/assets/austrounat.png"
                alt="telescope"
                width={400}
                height={400}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/assets/ufo.png"
                alt="telescope"
                width={120}
                height={120}
                className="ufo-animation"
              />
            </div>
            <div>
              <h1 className="text-center text-3xl text-bold">
                Join our community
              </h1>
              <p className="text-justify px-4 max-w-screen-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                quaerat tenetur error molestiae accusantium iure voluptas
                maiores, accusamus veritatis sequi aliquid nemo maxime explicabo
                deserunt. Assumenda veritatis consectetur, ducimus corrupti
                neque inventore esse? Suscipit, quos. Exercitationem minus
                voluptas rem voluptatum ex, ratione dolorem enim officiis a modi
                ipsa quibusdam accusantium neque aperiam consequatur incidunt
                veritatis repellat itaque cupiditate obcaecati perferendis
                corporis ipsam ducimus? Quidem
              </p>
              <div className="text-center pt-8">
                <Link href="/community">
                  <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-800 focus:outline-none focus:bg-purple-700 transition duration-300 ease-in-out">
                    Join Community
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
