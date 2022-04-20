import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//                 </Contents>
//             <Footer />
//         </>
//     )
// }

class Main extends React.Component {
    state = { //state 변수 설정
        isLoading: true,
    }

   getSite = () => {
       setTimeout(()=> {
        gsap.to("#header", {duration: 0.2, top:0});
        gsap.to("#footer", {duration: 4, bottom:0});
        gsap.to(".main__inner > div:nth-child(1)", {duration: 1.0, opacity:1, y:0, delay: 1.0,ease: "back.inOut(10)", y: 0 });
        gsap.to(".main__inner > div:nth-child(2)", {duration: 1.2, opacity:1, y:0, delay: 1.2,ease: "back.inOut(10)", y: 0 });
        gsap.to(".main__inner > div:nth-child(3)", {duration: 1.4, opacity:1, y:0, delay: 1.4,ease: "back.inOut(10)", y: 0 });
        gsap.to(".main__inner > div:nth-child(4)", {duration: 1.6, opacity:1, y:0, delay: 1.6,ease: "back.inOut(10)", y: 0 });
       }, 1000)
   }
//생명주기 함수 ..사이트가 로딩이 시작하면
componentDidMount(){
    setTimeout(() => {
        this.setState({isLoading:false}); 
        this.getSite();    
    }, 3000)
}

    render(){     
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading/>
                    ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}   
            </>    
        )  
    }
}

export default Main;







