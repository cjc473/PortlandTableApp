import React from "react";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router";


class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { restaurant } = this.props
    return (
      <Link to={`/restaurants/${restaurant.id}`}>
        <div className="restaurant-card">
          <img className="icon-pic" src={restaurant.photo} />
          <h3 className="card-name">{restaurant.name}</h3>
          <p className="card-details">{restaurant.primary_tag}&nbsp;&nbsp;·&nbsp;&nbsp;{restaurant.price}&nbsp;&nbsp;·&nbsp;&nbsp;{restaurant.neighborhood}</p>
          <div className="card-reservations">
            <div className="card-res-time">6:30 PM</div>
            <div className="card-res-time">7:00 PM</div>
            <div className="card-res-time">7:30 PM</div>
          </div>
        </div>
      </Link>
    )
  }
}

export default RestaurantIndexItem