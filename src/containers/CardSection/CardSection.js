import React from "react"
import "./cardsection.css"
import Sedans from "../../assets/icon-sedans.svg"
import SUVS from "../../assets/icon-suvs.svg"
import Luxurt from "../../assets/icon-luxury.svg"
import CardData from "../../components/CardData/CardData"

const cardData = [
  {
    img: { Sedans },
    header: "SEDANS",
    text: "Choose a sedan for its affordability and excellent fuel economoy. Ideal for crusiing in the city or on your next road trip."
  }
]

const CardSection = () => {
  return (
    <div className="card-section_container section-padding">
      <CardData />
    </div>
  )
}

export default CardSection
