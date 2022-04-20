import React from "react";
import Header from "../layout/Header"
import Contents from "../layout/Contents"
import Footer from "../layout/Footer"
import ContTitle from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Reference(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//             <ContTitle title={["HTML","REFERENCE"]} color="light"/>
//                 <ReferCont color="light"/>
//                 <Contact/>
//                 </Contents>
//             <Footer color="light"/>
//         </>
//     )
// }

class Reference extends React.Component {
    state = {
        isLoading : true,
        refers: [],
    }

    mainAnimation= () => {
        setTimeout(()=> {
            gsap.to("#header", {duration: 0.6, top:0});
            gsap.to("#footer", {duration: 0.6, bottom:0});
            gsap.to(".cont__title strong", {duration: 0.8 , opacity:1, x:0, y: 0, delay: 1.0,ease: "back.inOut(5)", y: 0 })
            gsap.to(".cont__title em", {duration: 1.0 , opacity:1, x:0, y: 0, delay: 1.2,ease: "back.inOut(5)", y: 0 })
            gsap.to(".Reference__inner", {duration: 1.3 , opacity:1, x:0, y: 0, delay: 1.8,ease: "back.inOut(5)", y: 0 })
        }, 10)
    }
    componentDidMount(){
        setTimeout(()=>{
            // console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "#f0eeeb";
         this.getPorts()
        }, 2000)
    }
    getPorts = async () => {

        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://jowuseop1110.github.io/react2022/src/assets/json/reference.json");
        // console.log(htmlRefer)

        this.setState({refers: refer, isLoading: false})   
        this.mainAnimation();
    }
    render(){
        const {isLoading, refers} = this.state;
        // console.log(refers)
        return (
            <>
              {isLoading ? (
                    <Loading color ="light"/>
                    ):(
                    <>
                        <Header color="light"/>
                        <Contents color="light">
                        <ContTitle title={["HTML","REFERENCE"]} color="light"/>
                            <ReferCont refer={refers} color="light"/>
                            <Contact/>
                            </Contents>
                        <Footer color="light"/>
                    </>
                )}
            </>
        )
    }
}
export default Reference