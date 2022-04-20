import React from 'react'
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Contents from "../layout/Contents"
import { gsap } from "gsap";

class ReferDetail extends React.Component {

  componentDidMount(){
    this.mainAnimation()
  }

  mainAnimation= () => {
    setTimeout(()=> {
        gsap.to("#header", {duration: 0.6, top:0});
        gsap.to("#footer", {duration: 0.6, bottom:0});
        gsap.to(".cont__title strong", {duration: 0.8 , opacity:1, x:0, y: 0, delay: 1.0,ease: "back.inOut(5)", y: 0 })
        gsap.to(".cont__title em", {duration: 1.0 , opacity:1, x:0, y: 0, delay: 1.2,ease: "back.inOut(5)", y: 0 })
    }, 10)
}
  render(){
    return (
      <>
        <Header color="light"/>
          <Contents color="light">
            <div>fdfdsf</div>  
          </Contents>
        <Footer color="light"/>
      </>
    )
  }
}

export default ReferDetail