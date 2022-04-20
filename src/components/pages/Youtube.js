import React from "react";
import Header from "../layout/Header"
import Contents from "../layout/Contents"
import Footer from "../layout/Footer"
import ContTitle from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";

function Youtube(){
    return (
        <>
          <Header color="light"/>
            <Contents color="light">
            <ContTitle title={["CONDING","YOUTUBER"]} color="light"/>
                <YoutubeCont/>
                <Contact/>
            </Contents>
            <Footer color="light"/>
        </>
    )
}
export default Youtube