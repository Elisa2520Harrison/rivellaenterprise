import DzowoeImage from "../assets/images/dzowoe.jpg";
import BisapImage from "../assets/images/bisap.png";
import TamarindImage from "../assets/images/tamarind.png";
import AlihaImage from "../assets/images/aliha.png";
import CoconutCocktailImage from "../assets/images/coconutcocktail.png";
import MilletDrinkImage from "../assets/images/milletdrink.png";
import FruitJuicesImage from "../assets/images/fruitjuices.png";
import AgbeliKakloImage from "../assets/images/agbelikaklo.png";
import ChinChinImage from "../assets/images/chinchin.jpg";
import PlantainChipsImage from "../assets/images/plantainchips.png";
import BoiledEggImage from "../assets/images/boiledegg.png";
import GizzardImage from "../assets/images/gizzard.png";
import GrilledChickenImage from "../assets/images/grilledchicken.png";
import PepperedWeleImage from "../assets/images/pepperedwele.png";

export default function Products() {
  const productCategories = [
    {
      title: "Refreshing Drinks",
      products: [
        { name: "Bisap Drink", image: BisapImage },
        { name: "Tamarind Drink", image: TamarindImage },
        { name: "Coconut Cocktail", image: CoconutCocktailImage },
        { name: "Millet Drink", image: MilletDrinkImage },
        { name: "Fruit Juices", image: FruitJuicesImage },
        { name: "Aliha (Asana)", image: AlihaImage },
      ],
    },
    {
      title: "Delicious Snacks",
      products: [
        { name: "Agbeli Kaklo", image: AgbeliKakloImage },
        { name: "Chin Chin", image: ChinChinImage },
        { name: "Plantain Chips", image: PlantainChipsImage },
        { name: "Dzowoe", image: DzowoeImage },
      ],
    },
    {
      title: "Finger Foods",
      products: [
        { name: "Boiled Egg + Pepper", image: BoiledEggImage },
        { name: "Gizzard (Khebab)", image: GizzardImage },
        { name: "Grilled Chicken Pieces", image: GrilledChickenImage },
        { name: "Peppered Wele", image: PepperedWeleImage },
      ],
    },
  ];

  return (
    <section id="products" className="px-4 sm:px-6 md:px-16 py-12 max-w-7xl mx-auto bg-purple-100">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#8B297F] mb-2 sm:mb-4">
          Our <span className="text-[#2F7739]">Products</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#8B297F] to-[#2F7739] mx-auto rounded-full"></div>
      </div>


      <div className="space-y-16">
        {productCategories.map((category, index) => (
          <div key={index} className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2f7e40] border-b-2 border-[#8B297F] pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.products.map((product, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-3 sm:p-4 flex flex-col"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 sm:h-40 object-cover rounded-md mb-3 sm:mb-4"
                  />
                  <h4 className="text-sm sm:text-base font-semibold text-[#2f7e40] mb-1 sm:mb-2">
                    {product.name}
                  </h4>
                  <button className="mt-auto bg-[#8B297F] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-[#722067] transition-colors text-xs sm:text-sm">
                    Enquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}