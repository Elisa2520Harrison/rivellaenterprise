import healthybg from "../assets/images/healthybg.png";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pt-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={healthybg}
          alt="Hero Background"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen flex-col px-4 text-center space-y-6 sm:space-y-8">
        {/* Tagline - kept small on all screens */}
        <h1 className="border border-pink-500 rounded-3xl px-4 py-1.5 sm:px-6 sm:py-2 text-white font-bold text-xs sm:text-sm md:text-base bg-black/30">
          “…healthy habits start now…”
        </h1>

        {/* Rivella - large on mobile, scales up */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-purple-600 leading-tight">
          Rivella
        </h1>

        {/* ENTERPRISE - large on mobile, scales up */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f3b925] font-mono tracking-tight">
          ENTERPRISE
        </h2>

        {/* Paragraph - smaller on mobile */}
        <h3 className="text-white text-base sm:text-xl md:text-2xl max-w-2xl mx-auto px-4 float-animation">
          Your reference point for{" "}
          <span className="font-extrabold">healthy living</span>. We deliver the
          finest quality, nutrient-rich beverages and artisanal snacks crafted with{" "}
          <span className="text-[#f3b925]">locally sourced ingredients</span>.
        </h3>

        <button className="text-white border border-white rounded-2xl w-40 h-10 font-bold transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg text-sm sm:text-base">
          Get In Touch
        </button>
      </div>
    </section>
  );
}