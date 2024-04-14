import Hero from "./components/Hero";
import Achivements from "./components/Achivements";
import WantMore from "./components/WantMore";
import Membership from "./components/Membership";
import Hourners from "./components/Hourners";
import Incharge from "./components/Incharge";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Membership />
      <Hourners />
      <Incharge />
      {/* <Achivements /> */}
      {/* <WantMore /> */}
      {/* <Footer /> */}
    </main>
  );
}
