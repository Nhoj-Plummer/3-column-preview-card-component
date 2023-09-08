import React from "react"
import "./cardsection.css"
import Sedans from "../../assets/icon-sedans.svg"
import SUVS from "../../assets/icon-suvs.svg"
import Luxury from "../../assets/icon-luxury.svg"
import CardData from "../../components/CardData/CardData"

const cardData = [
  {
    image: { Sedans },
    header: "SEDANS",
    text: "Choose a sedan for its affordability and excellent fuel economoy. Ideal for crusiing in the city or on your next road trip."
  }
]

const CardSection = () => {
  return (
    <div className="card-section_container section-padding">
      <CardData image={Sedans} header="SEDANS" text="Choose a sedan for its affordability and excellent fuel economoy. Ideal for crusiing in the city or on your next road trip." />
      <CardData />
      <CardData />
    </div>
  )
}

export default CardSection
