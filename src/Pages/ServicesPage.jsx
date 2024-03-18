import ServicePageHero from "../Components/ServicesPageHero";
import NavBar from "../Components/NavBar";
import ServicePageResidential from "../Components/ServicesPageResidential";
import ServicePageCommercial from "../Components/ServicesPageCommercial";
import ServicePageStormDamage from "../Components/ServicesPageStormDamage";
import ServicePageCopper from "../Components/ServicesPageCopper";
import Footer from "../Components/Footer";
import React from "react";

function Services () {
    return (
        <div>
            <NavBar />
            <ServicePageHero />
            <ServicePageResidential />
            <ServicePageCommercial />
            <ServicePageStormDamage /> 
            <ServicePageCopper />
            <Footer />
        </div>
    );
}

export default Services;