import React from "react";
// import { withRouter } from "react-router";


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { restaurant } = this.props
    return (
      <div className="restaurant-card">
        <img className="icon-pic" src={restaurant.photo} />
        <h3 className="card-name">{restaurant.name}</h3>
        <p className="card-details">{restaurant.primary_tag} | {restaurant.price} | {restaurant.neighborhood}</p>
      </div>
    )
  }
}

export default RestaurantIndexItem