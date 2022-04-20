import React from "react";

function ReferInfo({number, title, desc}){
    return (
        <ul>
            <li>
                <div className="list_number">{number}</div>
                <div className="list_title">{title}</div>
                <div className="list_desc">{desc}</div>
            </li>
        </ul>
    )
}

const ReferText = [
    {
        number : "1",
        title : "align-contents",
        desc : "align-contents 속성은 콘텐츠의 상하관계 정렬 상태를 정의 합니다.",
    },
    {
        number : "2",
        title : "align-items",
        desc : "align-items 속성은 콘텐츠 내부의 정렬 상태를 정의합니다.",
    },
    {
        number : "3",
        title : "all",
        desc : "all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.",
    },
    {
        number : "4",
        title : "animation",
        desc : "animation 속성은 애니메이션을 설정합니다.",
    },
    {
        number : "5",
        title : "animation-delay",
        desc : "animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다.",
    },
    {
        number : "6",
        title : "animation-direction",
        desc : "animation-direction 속성은 애니메이션 움직임 방향을 설정합니다.",
    },
    {
        number : "7",
        title : "animation-duration",
        desc : "animation-duration 속성은 애니메이션 움직임 시간을 설정합니다.",
    },
    {
        number : "8",
        title : "animation-fill-mode",
        desc : "animation-fill-mode 속성은 애니메이션이 끝난 후의 상태를 설정합니다.",
    },
    {
        number : "9",
        title : "animation-iteration-count",
        desc : "animation-iteration-count 속성은 애니메이션 반복 횟수 설정합니다.",
    },
    {
        number : "10",
        title : "animation-name",
        desc : "animation-name 속성은 애니메이션 keyframe 이름을 설정합니다.",
    },
    {
        number : "11",
        title : "animation-play-state",
        desc : "animation-play-state 속성은 애니메이션 진행상태를 설정합니다.",
    },
    {
        number : "12",
        title : "animation-timing-function",
        desc : "animation-play-state 속성은 애니메이션 진행상태를 설정합니다.",
    },
    {
        number : "13",
        title : "backface-visibility",
        desc : "backface-visibility 속성은 요소의 뒷면을 정의합니다.",
    },
    {
        number : "14",
        title : "background",
        desc : "background 속성은 단축 속성으로 하나의 선언으로 배경 속성 값을 정의합니다.",
    },
    {
        number : "15",
        title : "background-attachment",
        desc : "background-attachment 속성은 배경이미지의 고정여부를 설정하기 위한 속성입니다.",
    },
    {
        number : "16",
        title : "background-blend-mode",
        desc : "background-blend-mode 속성은 각 배경 레이어의 혼합 모드를 정의합니다.",
    },
    {
        number : "17",
        title : "background-clip",
        desc : "background-clip 속성은 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할 지 지정합니다.",
    },
    {
        number : "18",
        title : "background-color",
        desc : "background-color 속성은 요소의 배경 색을 지정합니다.",
    },
    {
        number : "19",
        title : "background-image",
        desc : "background-image 속성은 요소의 배경 이미지를 한 개나 여러 개 지정합니다.",
    },
    {
        number : "20",   
        title : "background-origin",
        desc : "background-origin 속성은 배경 이미지의 위치를 어디서부터 시작할지 지정합니다.",
    },
]

function ReferCont(props){
    return(
        <section className={`Reference__cont ${props.color}`}>
                    <div className="Reference__inner">
                        <h4 className="Reference__title">CSS REFERENCE</h4>               
                       {ReferText.map(txt => (
                        <ReferInfo
                        key = {txt.title}
                        number = {txt.number}
                        title= {txt.title}
                        desc = {txt.desc}
                        />                       
                       ))}
                       
                       

                    </div>
                </section>
    )

}
export default ReferCont;