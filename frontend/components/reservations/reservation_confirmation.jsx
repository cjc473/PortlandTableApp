import React from "react";
import RestaurantCardContainer from "./restaurant_card_container";
import { BsCheckCircleFill } from 'react-icons/bs'

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
            <h2 id="confirmation-message"><BsCheckCircleFill color="green" />Reservation confirmed</h2>
            <RestaurantCardContainer restaurantId={this.props.restaurantId} />
            {/* <h2>{restaurant.name}</h2> */}
            <h2>{reservation.time}</h2>
            <h2>{reservation.date}</h2>
            <h2>{reservation.party_size}</h2>
          </div>
        </div>
      </div>
    )
  }
}


export default ReservationConfirmation