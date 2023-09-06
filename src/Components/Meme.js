import React from "react";
import memesData from "../memesData"
export default function Meme(){

    const[meme, setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })
    const[allMemesImages, setAllMemeImage]=React.useState(memesData)

    function getImgaeClicked(){
        const memesArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url= memesArray[randomNumber].url
        setMeme(prevData=>({
            ...prevData,
            randomImage: url

        }))
    }
    function handleChange(event){
        const{name, value} = event.target
        setMeme(prevData=>({
            ...prevData,
            [name]: value
        }))
    }


    return(
        <div>
            <form className="form">
                <div className="from--input">   
                    <input
                    placeholder="Top Text"
                    type="text"
                    className="form--text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                    <input
                    placeholder="Bottom Text"
                    type="text"
                    className="form--text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />

                </div>
                <button type="button"
                onClick={getImgaeClicked}
                className="form--submit"><h5 className="button--text">Get a new meme image  🖼</h5></button>
            </form>
            <div className="meme">
            <img src={meme.randomImage} className ="meme--img"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}