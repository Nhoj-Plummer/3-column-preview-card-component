import React from "react"
import "./cardsection.css"

const CardSection = props => {
  return <div className="card-section_container section-padding">{props.children}</div>
}

export default CardSection
