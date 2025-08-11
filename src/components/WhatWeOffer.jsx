import { Cake, Utensils, Wine, Sparkles } from "lucide-react";

export default function WhatWeOffer() {
  const services = [
    {
      title: "Pastries & Finger Foods",
      icon: <Cake className="w-10 h-10 text-[#8B297F]" />,
      description: "Delicious meat pies, spring rolls, and snacks made fresh to order.",
    },
    {
      title: "Event Catering",
      icon: <Utensils className="w-10 h-10 text-[#8B297F]" />,
      description: "From weddings to corporate functions, we cater to every occasion.",
    },
    {
      title: "Natural Drinks",
      icon: <Wine className="w-10 h-10 text-[#8B297F]" />,
      description: "Refreshing, locally crafted beverages — 100% natural, no additives.",
    },
    {
      title: "Custom Orders",
      icon: <Sparkles className="w-10 h-10 text-[#8B297F]" />,
      description: "Personalized menus and large quantities tailored to your needs.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-[#2f7e40] mb-8">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-[#8B297F] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="bg-[#8B297F] text-white px-4 py-2 rounded-full hover:bg-[#722067] transition-colors">
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
