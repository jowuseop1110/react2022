import React from 'react'

function ContactInfo({span1, span2, span3, pText}){
    return(
        <>
            <span>{span1}</span>
            <span>{span2}</span>
            <span>{span3}</span>
            <p>
            {pText}
            </p>
        </>
    )
}

const conTackInfo = [
    {
        span1 : "YOU ARE",
        span2 : "ALREADY",
        span3 : "DOING WELL.",
        pText : "같은 목표를 위해 달려갈 웹 퍼블리셔 & 프론트 앤드 개발자를 모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.",
    }
]
function ContactCont() {
  return (
    <section className="Contact__cont">
        <div className="Contact__inner">
        {conTackInfo.map(txt => (
          <ContactInfo 
            key = {txt.title}
            span1 = {txt.span1}
            span2 = {txt.span2}
            span3 = {txt.span3}
            pText = {txt.pText}
          />
        ))}
        </div>
    </section>
  )
}

export default ContactCont