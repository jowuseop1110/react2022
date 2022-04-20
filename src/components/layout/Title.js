import React from 'react'

function ContTitle(props) {
  return (
    <section className={`cont__title ${props.color}`}>
       {/* <section className={`cont__title ${props.title[0]}`}></section> */}
        <div className="container">
            <h1>
                <strong>{props.title[0]}</strong>
                <em>{props.title[1]}</em>
                {/* props로 제목 넘겨 받음 */}
            </h1>
        </div>
    </section>
  )
}

export default ContTitle