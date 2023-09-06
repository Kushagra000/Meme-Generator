import React from "react"
export default function Header(){
    return(
        <header className="header">
            <img src={require("../images/TrollFace.png")} className="logo--img"/>
            <h3 className="logo--text">MemeGenerator</h3>
            <h5 className="logo--content">React Course - Project 3</h5>
        </header>
    )
}