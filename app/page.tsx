import Hero from "./components/Hero";
import Achivements from "./components/Achivements";
import WantMore from "./components/WantMore";
import Membership from "./components/Membership";
import Hourners from "./components/Hourners";
import Incharge from "./components/Incharge";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Membership />
      <Hourners />
      <Incharge />
      <Achivements />
      <WantMore />
      <Footer />
    </main>
  );
}
