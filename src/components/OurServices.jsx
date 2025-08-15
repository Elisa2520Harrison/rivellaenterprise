import WeddingImg from "../assets/images/wedding.png";
import FuneralImg from "../assets/images/funeral.png";
import CorporateImg from "../assets/images/corporate.png";
import EventImg from "../assets/images/event.png";

export default function OurServices() {
  const services = [
    {
      title: "Weddings & Engagements",
      description: "Celebrate your special moments with healthy, refreshing local beverages and snacks that make every occasion memorable.",
      image: WeddingImg,
    },
    {
      title: "Funerals",
      description: "Show care and hospitality during farewells with our authentic local drinks and quality service.",
      image: FuneralImg,
    },
    {
      title: "Corporate Events",
      description: "Professional catering for conferences, summits, and business gatherings with exceptional taste.",
      image: CorporateImg,
    },
    {
      title: "Special Events",
      description: "From summits to private parties, we bring natural taste and quality service everywhere.",
      image: EventImg,
    },
  ];

  return (
    <section id="services" className="px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#8B297F] mb-2 sm:mb-4">
          Our <span className="text-[#2F7739]">Services</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#8B297F] to-[#2F7739] mx-auto rounded-full mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 px-2 sm:px-0 mb-10">
          We provide premium local drinks, fresh fruit juices, and tasty snacks for weddings, corporate events, funerals, and special occasions.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full"
          >
            <div className="relative h-40 sm:h-48 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-[#2F7739] mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 flex-grow">
                {service.description}
              </p>

              <button className="mt-4 bg-[#8B297F] hover:bg-[#722067] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors text-xs sm:text-sm font-medium">
                Request Service
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}
