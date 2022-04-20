import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import Contact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";

function About(){
    return (
        <>
            <Header  color="light"/>
                <Contents color="light">
                    <ContTitle title={["ABOUT","ME"]}color="light"/>
                        <AboutCont color="light"/>
                    <Contact/>
                </Contents>
            <Footer color="light"/>
        </>
    )
}
export default About