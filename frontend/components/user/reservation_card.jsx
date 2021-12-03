import React from "react";
import { BiTimeFive, BiCalendarAlt, BiUserCircle } from 'react-icons/bi'
import { Link } from "react-router-dom";

class ReservationCard extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   reservation: this.props.reservation,
    //   restaurant: this.props.restaurants[reservation.restaurant_id]
    // }
  }

  componentDidMount() {
    // this.props.fetchRestaurants()
  }



  render() {
    if ((!this.props.restaurant) || (!this.props.reservation)) return null;
    const {reservation, restaurant} = this.props;
    console.log("props below")
    // console.log(this.props)
    // const restaurant = this.props.restaurants[reservation.restaurant_id]
    console.log(restaurant)
    // console.log(restaurant.id)
    return (
      <div className="reservation-card-container">
        <div className="reservation-card-pic"><img src={restaurant.photo} alt="" /></div>
        <div className="reservation-card-text-container">
          <div className="reservation-card-details">
            <h2>{restaurant.name}</h2>
            <p><BiTimeFive font-size="24px" /> &nbsp;&nbsp;{reservation.time}</p>
            <p><BiCalendarAlt font-size="24px" /> &nbsp;&nbsp;{reservation.date}</p>
            <p><BiUserCircle font-size="24px" /> &nbsp;&nbsp;Table for {reservation.party_size}</p>
          </div>
          <div className="reservation-card-button-container">
            <div className="reservation-card-button">Modify</div>
            <div className="reservation-card-button">Cancel</div>
          </div>
        </div>

      </div>
    )
  }
}

export default ReservationCard