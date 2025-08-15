import Card, { CardContent } from "../components/Card";
import { TrendingUp, Users, Award, Heart } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "2,000+",
      label: "Happy Customers",
      description: "Satisfied with our premium quality",
      color: "from-[#2E7658] to-emerald-500"
    },
    {
      icon: Award,
      number: "6+",
      label: "Years Excellence",
      description: "Committed to quality since 2018",
      color: "from-purple-400 to-purple-700"
    },
    {
      icon: TrendingUp,
      number: "15+",
      label: "Product Varieties",
      description: "Artisanal beverages and snacks",
      color: "from-gold to-amber-500"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Natural Ingredients",
      description: "No artificial additives",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-emerald-100 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-rivella-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-950/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#8B297F] mb-2 sm:mb-4">
            Our <span className="text-[#2F7739]">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B297F] to-[#2F7739] mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group text-center card-hover border-0 shadow-lg bg-white relative overflow-hidden"
            >
              {/* Hover background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-4 sm:p-8 relative z-10">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-150`}
                  ></div>
                  <div className="relative transform group-hover:scale-110 transition-all duration-500">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} p-3 sm:p-4 shadow-lg`}
                    >
                      <stat.icon
                        className="w-full h-full text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                {/* Stat Text */}
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-4xl font-black text-gray-900 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {stat.label}
                  </h3>
                  <p className="text-sm sm:text-lg text-gray-600 font-light">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
