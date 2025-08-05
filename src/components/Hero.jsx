import rivellahero from "../assets/images/rivellahero.jpg"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={rivellahero}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-20 flex items-center justify-center min-h-screen flex-col px-4
       text-center space-y-8">
        <h1 className="border border-pink-500 rounded-3xl px-6 py-2 text-white font-bold 
        text-sm sm:text-base md:text-lg bg-black/30">
          “…healthy habits start now…”
        </h1>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent
         bg-clip-text bg-gradient-to-r from-green-700 to-purple-600">
          Rivella
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mt-1">
          Enterprise
        </h2>
      </div>
    </section>
  );
}
