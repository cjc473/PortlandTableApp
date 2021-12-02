import React from "react";
import RestaurantCardContainer from "./restaurant_card_container";

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
      <div className="confirmation-page-container">
        <RestaurantCardContainer restaurantId={this.props.restaurantId}/>
        <h1>Reservation confirmed</h1>
        {/* <h2>{restaurant.name}</h2> */}
        <h2>{reservation.time}</h2>
        <h2>{reservation.date}</h2>
        <h2>{reservation.party_size}</h2>
      </div>

    )
  }
}


export default ReservationConfirmation