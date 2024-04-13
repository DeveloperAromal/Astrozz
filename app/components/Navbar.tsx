export default function Navbar() {
  return (
    <section>
      <div>
        <div>
          <header className="lg:block md:block sm:block hidden">
            <nav>
              <ul className="flex gap-10 items-end justify-end pr-10 pt-4">
                <li className="font-bold text-2xl cursor-pointer hover:text-emerald-700">
                  Home
                </li>
                <li className="font-bold text-2xl cursor-pointer hover:text-emerald-700">
                  About Us
                </li>
                <li className="font-bold text-2xl cursor-pointer hover:text-emerald-700">
                  Gallery
                </li>
                <li className="font-bold text-2xl cursor-pointer hover:text-emerald-700">
                  Contact Us
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </section>
  );
}
