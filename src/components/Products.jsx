import DrinksImage from "../assets/images/drinks.png";
import SnacksImage from "../assets/images/snacks.png";
import OthersImage from "../assets/images/others.png";

import BisapImage from "../assets/images/bisap.png";
import TamarindImage from "../assets/images/tamarind.png";

// import AgoniImage from "../assets/images/products/agoni.jpg";
// import KakoroImage from "../assets/images/products/kakoro.jpg";
// import ChinChinImage from "../assets/images/products/chinchin.jpg";
// import PlantainChipsImage from "../assets/images/products/plantain_chips.jpg";
// import ZipBellyImage from "../assets/images/products/zip_belly.jpg";
// import JewelryImage from "../assets/images/products/jewelry.jpg";

// import BoiledEggPepperImage from "../assets/images/products/boiled_egg_pepper.jpg";
// import GizzardBucketImage from "../assets/images/products/gizzard_bucket.jpg";
// import KebabImage from "../assets/images/products/kebab.jpg";
// import GrilledChickenImage from "../assets/images/products/grilled_chicken.jpg";
// import PepperedDurianImage from "../assets/images/products/peppered_durian.jpg";

export default function Products () {
  const productCategories = [
    {
      title: "Drinks & Juices",
      image: DrinksImage,
      products: [
        { name: "Bisap Drink", image: BisapImage },
        { name: "Tamarind Drink", image: TamarindImage },
        // { name: "Coconut Cocktail", image: CoconutCocktailImage },
        // { name: "Fruit Juices", image: FruitJuicesImage },
      ],
    },
    // {
    //   title: "Snacks",
    //   image: SnacksImage,
    //   products: [
    //     { name: "Cocoa Rings", image: CocoaRingsImage },
    //     { name: "Achi Fifi", image: AchiFifiImage },
    //     { name: "Agoni", image: AgoniImage },
    //     { name: "Kakoro", image: KakoroImage },
    //     { name: "Chin Chin", image: ChinChinImage },
    //     { name: "Plantain Chips", image: PlantainChipsImage },
    //     { name: "Zip Belly", image: ZipBellyImage },
    //     { name: "Jewelry", image: JewelryImage },
    //   ],
    // },
    // {
    //   title: "Others",
    //   image: OthersImage,
    //   products: [
    //     { name: "Boiled Egg + Pepper", image: BoiledEggPepperImage },
    //     { name: "Gizzard in Bucket", image: GizzardBucketImage },
    //     { name: "Kebab", image: KebabImage },
    //     { name: "Grilled Chicken Pieces", image: GrilledChickenImage },
    //     { name: "Peppered Durian", image: PepperedDurianImage },
    //   ],
    // },
  ];

  return (
    <section className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-[#2f7e40] mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productCategories.map((category, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover rounded-md mb-5"
            />
            <h3 className="text-xl font-semibold text-[#2f7e40] mb-4">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-3 overflow-auto max-h-60">
              {category.products.map((product, i) => (
                <li key={i} className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                    loading="lazy"
                  />
                  <span className="text-gray-700 text-base">{product.name}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-[#8B297F] text-white px-5 py-2 rounded-full hover:bg-[#722067] transition-colors self-start">
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

