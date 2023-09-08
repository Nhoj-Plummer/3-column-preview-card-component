import React from "react"
import { CardSection } from "../../containers/indexcon"
import Luxury from "../../assets/icon-luxury.svg"
import Sedans from "../../assets/icon-sedans.svg"
import SUVS from "../../assets/icon-suvs.svg"

const cardData = [
  {
    img: { Sedans },
    header: "SEDANS",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or an your next road trip."
  },
  { img: { SUVS }, header: "", text: "" },
  { img: { Luxury }, header: "", text: "" }
]

const CardData = () => {
  return <CardSection>{}</CardSection>
}

export default CardData
