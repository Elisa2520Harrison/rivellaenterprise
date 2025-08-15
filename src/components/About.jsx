import { Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-10 max-w-7xl mx-auto text-gray-800">
      {/* Since 2018 Badge */}
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center gap-2 border border-[#8B297F] 
          bg-purple-200 rounded-full px-3 py-1 mx-auto mb-5"
        >
          <Star className="w-4 h-4 text-[#8B297F]" />
          <span className="font-bold text-[#8B297F]">Since 2018</span>
          <Star className="w-4 h-4 text-[#8B297F]" />
        </div>

        {/* Main Title with Underline */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#8B297F] mb-2 sm:mb-4">
            About <span className="text-[#2F7739]">Rivella</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B297F] to-[#2F7739] mx-auto rounded-full mb-4 sm:mb-6"></div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">Who We Are</h2>
        <p>
          Rivella Enterprise is a proudly Ghanaian brand offering local non-alcoholic
          beverages and snacks, rooted in a passion for{" "}
          <strong>healthy living</strong> and <strong>natural ingredients</strong>.
          We believe that additive-free, locally crafted drinks can transform
          everyday wellness, from the home to the workplace and every gathering
          in between.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">Our Mission</h2>
        <p>
          To build a trusted brand that promotes <strong>wellness</strong>,{" "}
          <strong>flavour</strong>, and <strong>community</strong>, while
          delivering quality and service that stands out.
        </p>
      </div>

      {/* What Makes Us Different */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">
          What Makes Us Different
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Small Batch Production:</strong> Ensures every beverage and snack is
            fresh and flavourful.
          </li>
          <li>
            <strong>Customised to You:</strong> We tailor quantity and taste to
            your needs.
          </li>
          <li>
            <strong>100% Natural:</strong> No additives. No artificial
            sweeteners.
          </li>
          <li>
            <strong>Locally Sourced:</strong> Ingredients are grown and gathered
            right here in Ghana.
          </li>
        </ul>
      </div>

      {/* Sustainability Commitment */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">
          Sustainability Commitment
        </h2>
        <p>
          We're committed to protecting our environment. In 2024, we replaced
          plastic with paper packaging and switched from firewood to LPG —
          supporting:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>SDG 3:</strong> Good Health & Well-being
          </li>
          <li>
            <strong>SDG 8:</strong> Decent Work & Economic Growth
          </li>
          <li>
            <strong>SDG 12:</strong> Responsible Consumption & Production
          </li>
        </ul>
      </div>

      {/* Our Values */}
      <div>
        <h2 className="text-2xl font-bold text-[#308e51] mb-6">Our Values</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-[#B980B1] rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-[#8B297F]">Passion</h3>
            <p className="text-gray-600 text-sm">
              Committed in heart and mind to everything we do.
            </p>
          </div>
          <div className="border border-[#B980B1] rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-[#8B297F]">Accountability</h3>
            <p className="text-gray-600 text-sm">
              "It's up to me" attitude — we take responsibility and make it happen.
            </p>
          </div>
          <div className="border border-[#B980B1] rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-[#8B297F]">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Always looking for a better way — continual improvement in every
              process.
            </p>
          </div>
          <div className="border border-[#B980B1] rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg text-[#8B297F]">Quality</h3>
            <p className="text-gray-600 text-sm">
              What we do, we do it well — right first time, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}