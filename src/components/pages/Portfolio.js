import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import PortCont from "../includes/PortCont";
import ContTitle from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Portfolio(props){
//     return (
//         <>
//             <Header />
//                 <Contents>
//                     <ContTitle title={["portfolio","site"]}/>
//                     <PortCont/>
//                     <Contact/>
//                 </Contents>
//             <Footer />
//         </>
//     )
// }

class Portfolio extends React.Component {
    state = {
        isLoading : true,
        ports: [],
    }

    mainAnimation= () => {
        setTimeout(()=> {
            gsap.to("#header", {duration: 0.6, top:0});
            gsap.to("#footer", {duration: 0.6, bottom:0});
            gsap.to(".cont__title strong", {duration: 0.8 , opacity:1, x:0, y: 0, delay: 1.0,ease: "back.inOut(5)", y: 0 })
            gsap.to(".cont__title em", {duration: 1.0 , opacity:1, x:0, y: 0, delay: 1.2,ease: "back.inOut(5)", y: 0 })
            gsap.to(".port__inner", {duration: 1.4 , opacity:1, x:0, y: 0, delay: 1.2,ease: "back.inOut(1.7)", y: 0 })
        }, 10)
    }

    getPorts = async () => {
        const {data : {data : {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
            //axios 데이터 불러오기
        this.setState({ports : ports});
        // console.log(ports)

        setTimeout(()=> {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active")
         this.getPorts()
        }, 2000)
    }
    render(){
        const {isLoading, ports} = this.state;
        // console.log(ports)
        return(
            <>
             {isLoading ? (
                    <Loading/>
                    ) : (
                    <>
                    <Header />
                    <Contents>
                        <ContTitle title={["portfolio","site"]}/>                   
                            <PortCont port={ports}/>
                            <Contact/>
                        </Contents>
                    <Footer />
                </>
                )}   
            </>
        )
    }
}
export default Portfolio