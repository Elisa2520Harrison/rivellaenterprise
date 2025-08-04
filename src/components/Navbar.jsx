import { useEffect, useState } from "react";
import rivellalogo from "../assets/images/rivellalogo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
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
                <div className="flex items-center">
                    <img
                        src={rivellalogo}
                        alt="Rivella Logo"
                        className="h-10 w-auto"
                    />
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <div className="space-y-1">
                            <span className="block w-6 h-0.5 bg-black"></span>
                            <span className="block w-6 h-0.5 bg-black"></span>
                            <span className="block w-6 h-0.5 bg-black"></span>
                        </div>
                    </button>
                </div>

                <div
                    className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent text-black transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"
                        }`}
                >
                    <a href="#" className="block text-center py-2 md:py-0 hover:text-amber-600">Home</a>
                    <a href="#" className="block text-center py-2 md:py-0 hover:text-purple-600">About</a>
                    <a href="#" className="block text-center py-2 md:py-0 hover:text-purple-600">Products</a>
                    <a href="#" className="block text-center py-2 md:py-0 hover:text-purple-600">Services</a>
                    <a href="#" className="block text-center py-2 md:py-0 hover:text-purple-600">Contact</a>
                </div>
            </div>
        </nav>
    );
}
