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
        // true이면 로딩컴퍼터는를 보여줌
        refers: [],
        // 빈 배열(데이터를 axios로 불러올거임)
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
        // 밑에 삼항연사자로 인해 위에는 isLoading이 true이므로 로딩컴퍼넌트가 보여지고 있음
        //생명주기 함수: 사이트가 로딩을 시작하면...
        //2초뒤에 #loading에서 .loading__active를 삭제하고 isLoading을 false하여 로딩 컴퍼넌트를 빠져나오고
        //애니메이션 효과로 해더와 푸터 등등 각종 컨텐츠를 화면에 출력한다
        setTimeout(()=>{
            // 2초 뒤에
            // console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active")
            // #loading(opacity:0)을 찾아서 .loading__active(opacity:1)를 삭제한다(삭제하면 로딩이 끝나는 효과)
            document.querySelector("body").style.background = "#f0eeeb";
            this.getPorts()
            // this: 맨위에있는 class:함수의 집합체 안에서 함수끼리의 호출리 필요할땐 this를 앞에 써줘야하는 문법이라고 생각하자
            // getPorts()에는 다운받아온 데이터를 변수에 넣은 refers와
            // 처음에 로딩 컴퍼넌트를 보여주다가(true) 로딩을 멈추고(false)다음페이지를 보여주기위해
            // true로 값을 변경한 isLoading이 들어있음
        }, 2000)
    }
    getPorts = async () => {

        const {
            data: {
                data: {refer}
            }
            // axios로 다운받아온 데이터(refer) data:{data:{refer}} (배열안에 refer가 들어있는 경로)
        } = await axios.get("https://jowuseop1110.github.io/react2022/src/assets/json/reference.json");
        // await:기다리다 , axios로 데이터를 다운로드
        // console.log(htmlRefer)

        this.setState({refers: refer, isLoading: false})
        //state 변수를 변경할때는 set을 붙혀서 setState를 써준다
        //state = {isLoading: true, refers: []} 였던 변수들을 setState속성으로 
        //refers: 에는 axios로 다운받아온 데이터를,
        //isLoading: 에는 true로 값을 변경한다.
        this.mainAnimation();
        //header, footer, content 등등 애니메이션 효과들의 함수실행문
    }
    render(){
        const {isLoading, refers} = this.state;
        // console.log(refers)
        return (
            <>  
            {/* 삼항연산자: isLoading이 있으면(true) <Loading/>을 실행하고 없으면(false) <Header, Contents....Foooter 실행 */}
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