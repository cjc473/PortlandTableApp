import React from "react";
import { FiSearch } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import { BsCashStack } from 'react-icons/bs';
import CreateReservationContainer from "../reservations/create_reservation_container";


class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    // this.calculatePrice = this.calculatePrice.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant();
  }

  calculatePrice() {
    switch(this.props.restaurant.price) {
      case "$":
        return "$10 to $20";
      case "$$":
        return "$20 to $30";
      case "$$$":
        return "$30 to $50";
      case "$$$$":
        return "$50+";
      default:
        return "$10 to $50";
    }
  }

  render() {
    if (!this.props.restaurant) return null;
    const { restaurant } = this.props;
    return (
      <div className="showpage-container">

        <div className="showpage-banner" />

        <div className="showpage-forms">
          <div className="showpage-rest-details">
            <h1 className="showpage-name">{restaurant.name}</h1>
            <div className="showpage-shadow">
              <div className="showpage-detail-icons">
                <p><FaUtensils /> {restaurant.primary_tag}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsCashStack /> {this.calculatePrice()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BiHomeAlt /> {restaurant.neighborhood} </p>
              </div>
              <div className="additional-tags">
                <p>Additional Tags</p>
                <p className="tag">{restaurant.secondary_tag}</p>
                <p className="tag">{restaurant.tertiary_tag}</p>
              </div>
              <p className="showpage-description">{restaurant.description}</p>
              <img src={restaurant.photo} />
            </div>
          </div>

          <div id="create-reservation-container">
            <CreateReservationContainer />
          </div>
        </div>

      </div>
    )
  }
}

export default RestaurantShow