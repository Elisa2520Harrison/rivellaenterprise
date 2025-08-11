// import rivellahero from "../assets/images/rivellahero.jpg"
// import HeroImg from "../assets/images/heroimg.png"
import healthybg from "../assets/images/healthybg.png"



export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={healthybg}
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

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#f3b925] mt-1 font-mono">
          ENTERPRISE
        </h2>

        <h3 className="text-white text-2xl float-animation">
          Your reference point for <span className="font-extrabold">
            healthy living
          </span>. We deliver the finest
          quality, nutrient-rich <br /> beverages and artisanal snacks crafted with
          <span className="text-[#f3b925]"> locally sourced ingredients</span>.
        </h3>



        <button className="text-white border border-white rounded-2xl w-40 h-10 font-bold 
  transition-all duration-300 ease-in-out 
  hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg">
          Get In Touch
        </button>

      </div>
    </section>
  );
}
