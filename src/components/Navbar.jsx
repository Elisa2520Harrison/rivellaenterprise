import { useEffect, useState } from "react";
import rivellalogo from "../assets/images/rivellalogo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={rivellalogo} alt="Rivella Logo" className="h-10 w-auto" />
                </div>

                {/* Hamburger / Close Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none transition-all duration-300"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 transition-all duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <div className="space-y-1 transition-all duration-300">
                                <span className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`}></span>
                                <span className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`}></span>
                                <span className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`}></span>
                            </div>
                        )}

                    </button>
                </div>

                <div className="hidden md:flex space-x-6 items-center">
                    {["Home", "About", "Products", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`font-medium transition hover:text-purple-600 ${scrolled ? "text-black" : "text-white"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 transition-all duration-300">
                    {["Home", "About", "Products", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block text-black font-semibold hover:text-purple-600"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
