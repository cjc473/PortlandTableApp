import React from "react";
import RestaurantCardContainer from "./restaurant_card_container";
import { BsCheckCircleFill } from 'react-icons/bs'
import { BiTimeFive, BiCalendarAlt, BiUserCircle } from 'react-icons/bi'
import { Link } from "react-router-dom";

class ReservationConfirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'test'
    }
  
  }

  // myReservation() {
  //   this.props.fetchReservations
  // }

  componentDidMount() {
    this.props.fetchReservation();
    this.props.fetchRestaurant(this.props.restaurantId);
    
  }

  render() {
    if (!this.props.reservation) return null;
    // const {reservation} = this.props
    const { reservation } = this.props
    // console.log('begin here')
    // console.log(this.props)
    return (
      <div className="card-background"> 
        <div className="confirmation-page-container">
          <div className="confirmation-container">
            <h2 id="confirmation-message"><BsCheckCircleFill color="green" /> Reservation confirmed</h2>
            <RestaurantCardContainer restaurantId={this.props.restaurantId} />
            {/* <h2>{restaurant.name}</h2> */}
            <div className="confirm-card-details">
              <h2><BiTimeFive font-size="24px" /> &nbsp;&nbsp; {reservation.time}</h2>
              <h2><BiCalendarAlt font-size="24px" /> &nbsp;&nbsp; {reservation.date}</h2>
              <h2><BiUserCircle font-size="24px" /> &nbsp;&nbsp; Table for {reservation.party_size}</h2>
            </div>
            <div className="card-link"><Link to="/">Book another reservation</Link></div>
            <div className="card-link"><Link to="/profile">Manage my reservations</Link></div>
          </div>
        </div>
      </div>
    )
  }
}


export default ReservationConfirmation