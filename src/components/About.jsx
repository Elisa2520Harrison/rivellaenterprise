export default function About() {
  return (
    <section className="px-6 md:px-16 py-10 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-[#2f7e40] mb-10">
        About Rivella Enterprise
      </h1>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">Who We Are</h2>
        <p>
          Rivella Enterprise is a proudly Ghanaian brand offering local non-alcoholic
           beverages and snacks, rooted in a passion for <strong>healthy living</strong> and <strong>natural
             ingredients</strong>. We believe that additive-free, locally crafted drinks can transform everyday
              wellness, from the home to the workplace and every gathering in between.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">Our Mission</h2>
        <p>
          To build a trusted brand that promotes <strong>wellness</strong>, <strong>flavour</strong>, 
          and <strong>community</strong>, while delivering quality and service that stands out.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">What Makes Us Different</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Small Batch Production:</strong> Ensures every drink is fresh and flavourful.</li>
          <li><strong>Customised to You:</strong> We tailor quantity and taste to your needs.</li>
          <li><strong>100% Natural:</strong> No additives. No artificial sweeteners.</li>
          <li><strong>Locally Sourced:</strong> Ingredients are grown and gathered right here in Ghana.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#308e51] mb-2">Sustainability Commitment</h2>
        <p>
          We’re committed to protecting our environment. In 2024, we replaced plastic with paper packaging
           and switched from firewood to LPG-supporting:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>SDG 3:</strong> Good Health & Well-being</li>
          <li><strong>SDG 8:</strong> Decent Work & Economic Growth</li>
          <li><strong>SDG 12:</strong> Responsible Consumption & Production</li>
        </ul>
      </div>
    </section>
  );
}
