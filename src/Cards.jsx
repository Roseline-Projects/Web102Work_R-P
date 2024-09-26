import "./cards.css"
import React from "react"

import ReactDOM from "react-dom"

function Cards(props) {
    //let [title, type, link, img] = props

    return (
      <>
      <div className="container">
        
          <img src={props.img}></img>

        
        <div className="desc">
            <h2 className="resource-title">{props.title}</h2>
            <h3 className="resource-type">{props.type}</h3>
            <button className="link-button">
              <a href={props.link}>Explore</a>
            </button>
        </div>
      </div>
      </>
    )
  }
  
  export default Cards;
  