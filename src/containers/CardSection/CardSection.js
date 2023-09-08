import React from "react"
import "./CardSection.css"

const CardSection = props => {
  return <div className="card-section-container section-padding">{props.children}</div>
}

export default CardSection
