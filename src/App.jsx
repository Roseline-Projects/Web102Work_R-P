import { useState } from 'react'
import './App.css'
import Cards from "./Cards"
import DATA from "./resource"
import React from 'react'
import ReactDOM from "react-dom"

function App() {

  // const loadCards = () => {
  //   console.log('entered');
  //   const cardContainer = document.getElementsByClassName("card-container");
  //   //fetch("./resources.json")
  //   const data = JSON.parse(DATA);
  //   for(let i = 0; i <= 10; i++) {
  //     let element = React.createElement(Cards, [data[i]["title"], data[i]["type"], data[i]['link'], data[i]["img"]])
  //     cardContainer.appendChild(element)
  //   }
  // }

  return (
    <>
      <div className='header'>
        <div className='title'>
          <h1>Artist Resource Deck</h1>
        </div>
        <div className='splash-text'>
          <h2>Various tools and guides for aspiring artists.</h2>
        </div>
      </div>
      <div className='card-container'>
      
        <Cards title='Draw a Box' type='Fundamentals of Art - Elements' link='https://drawabox.com/' img='drawabox.jpg'/>
        <Cards title='Drawing Database by NKU' type='Learning how to learn to draw' link='https://www.youtube.com/@thedrawingdatabase8743' img='drawingdatabase.jpg'/>
        <Cards title='Line of Action' type='Study Resource - Figures & Still life' link='https://line-of-action.com/practice-tools/stilllife' img='/lineofaction.png'/>
        <Cards title='Pose My Art' type='Reference Tool - create poses from imagination' link='https://posemy.art/' img='posemyart.png'/>
        <Cards title="Blender Guru's Donut Tutorial" type='Intro to digital 3D modeling with the famous donut walkthrough' link='https://www.youtube.com/watch?v=nIoXOplUvAw' img='blenderdonut.jpg'/>
        <Cards title='ColorSpace' type='Palette Tool - generate color palette ideas' link='https://mycolor.space/' img='colorspace.png'/>
        <Cards title='Unsplash' type='Copyright free images for use or reference' link='https://unsplash.com/' img='unsplash.jpg'/>
        <Cards title='ArtistNetwork' type='Resources on drawing in perspective' link='https://www.artistsnetwork.com/art-mediums/learn-to-draw-perspective/' img='artistnetwork.png'/>
        <Cards title='The City Workshop Edinburgh' type='Learning value and form through shading a sphere' link='https://www.youtube.com/watch?v=AO0r70jhbvs' img='cityworkshop.jpg'/>
        <Cards title='Interaction Design Foundation' type='All about color theory' link='https://www.interaction-design.org/literature/topics/color-theory#:~:text=Color%20theory%20is%20the%20study,affect%20our%20emotions%20and%20perceptions.' img='interactiondesign.webp'/>
      

      </div>
    </>
  )
}

export default App
