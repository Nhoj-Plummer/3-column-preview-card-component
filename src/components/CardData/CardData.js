import React from "react"
import "./carddata.css"

const CardData = ({ image, header, text }) => {
  return (
    <div className="card-data_contianer">
      <img src={image} alt="icon" />
      <h1>{header}</h1>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  )
}

export default CardData
