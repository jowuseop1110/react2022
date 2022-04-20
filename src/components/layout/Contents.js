import React from "react";

function Contents({children},props){
    return <main id="main" className={props.color}>{children}</main>
}
export default Contents;