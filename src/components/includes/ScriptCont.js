import React from 'react'

function ScriptInfo({img, title, desc1, desc2}){
  return (
    <div className='script_cont'>
<img src={img} alt={img} />
        <ul>
          <li><a href="/">1</a></li>
          <li><a href="/">2</a></li>
          <li><a href="/">3</a></li>
          <li><a href="/">4</a></li>
          <li><a href="/">5</a></li>
          <li><a href="/">6</a></li>
          <li><a href="/">7</a></li>
          <li><a href="/">8</a></li>
          <li><a href="/">9</a></li>
          <li><a href="/">10</a></li>
        </ul>
        <h3>{title}</h3>
        <p className='desc'>
        {desc1}
        </p>
        <p>
        {desc2}
        </p>
  </div>
  )
}

const scriptContent = [
  {
    img : "img/Rectangle 244.jpg",
    title : "animationRequestFrame",
    desc1 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    img : "img/Rectangle 251.jpg",
    title : "animationRequestFrame",
    desc1 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    img : "img/Rectangle 252.jpg",
    title : "animationRequestFrame",
    desc1 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2 : "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
]

function ScriptCont(props){
  return (
     <section className={`Script__cont ${props.color}`}>
      <div className="Script__inner">
        {scriptContent.map(txt => (
          <ScriptInfo 
            key = {txt.title}
            img = {txt.img}
            title = {txt.title}
            desc1 = {txt.desc1}
            desc2 = {txt.desc2}
          />
        ))}
      </div>
    </section>
  )
}

export default ScriptCont