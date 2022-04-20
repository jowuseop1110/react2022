import React from "react";

function PortInfo({image, link, category, title}){
    return(
        <div className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt="이미지" /></a>
            </figure>
            <div className="text">
                <h3>{category}</h3>
                <p>{title}</p>
            </div>
        </div>
    )
}

function PortCont({port}){
    console.log(port)
    return(
        <section className="port__cont">
        <div className="container">
            <div className="port__inner">
                {port.map(data =>(           
                    <PortInfo                  
                        key = {data.title}
                        image = {data.image}
                        link = {data.link}
                        category = {data.category}
                        title = {data.title}     
                    />
                ))}
               
              
            </div>
        </div>
    </section>
    )
}
export default PortCont