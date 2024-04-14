import Hero from "./components/screens/Hero";
import Achivements from "./components/screens/Achivements";
import WantMore from "./components/screens/WantMore";
import Membership from "./components/screens/Membership";
import Hourners from "./components/screens/Hourners";
import Incharge from "./components/screens/Incharge";
import Footer from "./components/screens/Footer";

import Navbar from "./components/screens/Navbar";

export default function Page() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Membership />
      <Hourners />
      <Incharge />
      <Achivements />
      {/* <WantMore /> */}
      <Footer />
    </main>
  );
}
