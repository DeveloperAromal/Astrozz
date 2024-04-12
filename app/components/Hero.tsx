export default function Hero() {
  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
