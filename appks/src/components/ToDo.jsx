import React from "react";
function ToDo(props){
    return(
        <div class="blocks">
        <h2>{props.title}</h2>
        <img src={props.img}/>
        <p>{props.text}</p>    
        </div>
    );
}
export default ToDo;