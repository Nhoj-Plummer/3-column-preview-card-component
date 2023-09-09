import React from "react"
import "./cardsection.css"
import Sedans from "../../assets/icon-sedans.svg"
import SUVS from "../../assets/icon-suvs.svg"
import Luxury from "../../assets/icon-luxury.svg"
import CardData from "../../components/CardData/CardData"

// const cardData = [
//   {
//     image: { Sedans },
//     header: "SEDANS",
//     text: "Choose a sedan for its affordability and excellent fuel economoy. Ideal for crusiing in the city or on your next road trip."
//   }
// ]

const CardSection = () => {
  return (
    <div className="card-section_container section-padding">
      <CardData image={Sedans} header="SEDANS" text="Choose a sedan for its affordability and excellent fuel economoy. Ideal for crusiing in the city or on your next road trip." />
      <CardData image={SUVS} header="SUVS" text="Take an SUVS for its spacious interior, power. and versatility. Perfect for your next family vacation and off-road adventures." />
      <CardData image={Luxury} header="LUXURY" text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." />
    </div>
  )
}

export default CardSection
