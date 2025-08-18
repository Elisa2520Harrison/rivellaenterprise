import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import StatsSection from "../components/StatsSection";
import Products from "../components/Products";
import OurServices from "../components/OurServices";
import PastEvents from "../components/PastEvents";
import Footer from "../components/Footer";


export default function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <StatsSection />
            <About />
            <Products />
            <OurServices />
            <PastEvents />
            <Footer />
        </>

    );
}
