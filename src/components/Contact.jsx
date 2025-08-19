import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function Contact() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mblkvoev");

  return (
    <section
      id="contact"
      className=" bg-purple-100 py-16 px-4  flex flex-col items-center"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-[#8B297F] mb-4">
          Get In <span className="text-[#2F7739]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#8B297F] to-[#2F7739] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg">
          Fill out the form or contact us via WhatsApp or Email.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full"
      >
        {/* Name */}
        <div className="mb-6 relative">
          <input
            type="text"
            name="name"
            id="name"
            required
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B297F]"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#8B297F]"
          >
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="mb-6 relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B297F]"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#8B297F]"
          >
            Your Email
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-6 relative">
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B297F]"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-[#8B297F]"
          >
            Your Message
          </label>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#2F7739] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#256b30] transition duration-300 w-full flex justify-center items-center"
        >
          {state.submitting ? (
            <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Success Message */}
        {state.succeeded && (
          <p className="text-green-600 mt-4 text-center font-semibold">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
      </motion.form>

      {/* WhatsApp & Email Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-8"
      >
        <p className="text-gray-700">
          Email us:{" "}
          <a
            href="mailto: rivellaenterprise@gmail.com"
            className="text-[#8B297F] font-semibold hover:underline"
          >
            rivellaenterprise@gmail.com
          </a>
        </p>
        <p className="text-gray-700 mt-2">
          WhatsApp:{" "}
          <a
            href="https://wa.me/233262629312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2F7739] font-semibold hover:underline"
          >
            +233 262 629 312
          </a>
        </p>
      </motion.div>
    </section>
  );
}
