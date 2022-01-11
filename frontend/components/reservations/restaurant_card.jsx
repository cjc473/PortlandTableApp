import React from "react";


class RestaurantCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    const { restaurants } = this.props;
    const { restaurantId } = this.props;
    const restaurant = restaurants[restaurantId];
    if (!restaurant) return null;
    return (

        <div className="restaurant-card-container">
          <div className="icon-pic" className="card-photo-container">
            <img src={restaurant.photo} />
          </div>
          <h2 className="card-confirmed-name">{restaurant.name}</h2>
        </div>

    )
  }
}

export default RestaurantCard