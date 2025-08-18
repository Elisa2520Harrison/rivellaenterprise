import LuxuryImg from "../assets/images/luxurywed.png";
import GeishaSummitImg from "../assets/images/geishawomen.png";
import ExpoImg from "../assets/images/expo.png";

export default function PastEvents() {
  const events = [
    {
      title: "Luxury Wedding Reception",
      description:
        "Crafted custom drinks and delightful snacks for a glamorous wedding celebration that guests will remember forever.",
      image: LuxuryImg,
    },
    {
      title: "Geisha National Women’s Summit",
      description:
        "We had the incredible honor of being a vendor at the Geisha National Women's Summit. It was heartwarming to see inspiring women come together and enjoy our delicious local beverages. Thank you to everyone who visited our booth and shared in the joy!",
      image: GeishaSummitImg,
    },
    {
      title: "Corporate Expo 2024",
      description:
        "Showcased our signature drinks and catering excellence to hundreds of business professionals at this dynamic networking event.",
      image: ExpoImg,
    },
  ];

  return (
    <section className="bg-emerald-100 px-4 sm:px-6 py-12 md:py-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8B297F] mb-4">
          Past <span className="text-[#2F7739]">Events</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#8B297F] to-[#2F7739] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
          From weddings to national summits, Rivella Enterprise has proudly
          served exceptional drinks and hospitality at prestigious events.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden">
              <img
                src={event.image}
                srcSet={`${event.image} 400w, ${event.image} 800w`}
                sizes="(max-width: 768px) 400px, 800px"
                alt={event.title}
                width="400"
                height="300"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-[#2F7739] mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
