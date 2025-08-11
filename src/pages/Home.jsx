import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import StatsSection from "../components/StatsSection";
import Products from "../components/Products";


export default function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <StatsSection />
            <About />
            <Products />
        </>

    );
}
