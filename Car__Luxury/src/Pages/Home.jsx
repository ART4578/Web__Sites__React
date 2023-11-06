import { Link } from "react-router-dom";
import HeroSlider from "../UI/HeroSlider";

export default function Home() {
    return (
        <>
        {/*hero section*/}
        <section className="p-0 hero-slider-section">
            {/*arrows*/}  
            {/*hero slider*/}
            <HeroSlider/>
        </section>
        </>
    );
};