import Image from "next/image";

export default function Hero() {
  return (
    <section className="items-center justify-center">
      <div>
        <h1 className="text-center text-3xl">About Us</h1>
      </div>
      <div className="flex gap-10 py-20 flex-wrap items-center justify-center">
        <div>
          <Image
            src="/images/DPS.jpg"
            alt="logo"
            width={600}
            height={600}
            className="rounded-2xl hidden lg:block"
          />
          <Image
            src="/images/DPS.jpg"
            alt="logo"
            width={640}
            height={640}
            className="rounded-2xl p-4 block lg:hidden"
          />
        </div>
        <div>
          <div>
            <p className="welcome-para max-w-screen-sm text-justify text-xl text-white hidden lg:block">
              We Little Flower English Medium Higher Secondary School, nestled
              in Edava, Thiruvananthapuram, Kerala, is committed to delivering
              academic excellence. Our dedicated teachers prioritize
              child-centered learning, nurturing a strong foundation for
              holistic development. Guiding students through a seamless
              transition from childhood to adolescence, we enrich their
              education. With a rich history spanning 65 years, our institution
              stands out for its commitment to student success. Our stimulating
              and inclusive environment encourages curiosity, critical thinking,
              and personal growth. Offering a diverse array of dynamic programs
              and extracurricular activities, we cater to the unique talents of
              our students, ensuring an exceptional educational journey
            </p>
            <p className="welcome-para max-w-screen-sm text-justify text-small text-white mx-4 block lg:hidden">
              We Little Flower English Medium Higher Secondary School, nestled
              in Edava, Thiruvananthapuram, Kerala, is committed to delivering
              academic excellence. Our dedicated teachers prioritize
              child-centered learning, nurturing a strong foundation for
              holistic development. Guiding students through a seamless
              transition from childhood to adolescence, we enrich their
              education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
