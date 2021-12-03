import React from "react";
import RestaurantCardContainer from "./restaurant_card_container";
import ReservationForm from "./reservation_form";

class EditReservation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchReservation();
    this.props.fetchRestaurant(this.props.restaurantId);
  }

  render () {
    if (!this.props.reservation) return null;
    const { reservation } = this.props
    console.log(reservation.date)
    return(
      <div class="edit-page-container">
        <div class="edit-card-restaurant-container">
          <RestaurantCardContainer restaurantId={this.props.restaurantId} />
        </div>
        <div class="edit-form-container">
          <ReservationForm id="edit-form"
            party_size={reservation.party_size}
            date={reservation.date}
            time={reservation.time}
            user_id={this.props.user_id}
            restaurant_id={this.props.restaurant_id}
            formType={this.props.formType}
            action={this.props.action}
            reservation={reservation}
          />
        </div>
      </div>
    )

  }
}

// party_size: (this.props.party_size ? this.props.party_size : 2),
//   date: (this.props.date ? this.props.date : this.todayDateStr()),
//     time: (this.props.time ? this.props.time : "7:00 PM"),
//       user_id: this.props.userId,
//         restaurant_id: this.props.restaurantId


// render() {
//   if (!this.props.reservation) return null;
//   // const {reservation} = this.props
//   const { reservation } = this.props
//   // console.log('begin here')
//   // console.log(this.props)
//   return (
//     <div className="card-background">
//       <div className="confirmation-page-container">
//         <div className="confirmation-container">
//           <h2 id="confirmation-message"><BsCheckCircleFill color="green" /> Reservation confirmed</h2>
//           <RestaurantCardContainer restaurantId={this.props.restaurantId} />
//           {/* <h2>{restaurant.name}</h2> */}
//           <div className="confirm-card-details">
//             <h2><BiTimeFive font-size="24px" /> &nbsp;&nbsp; {reservation.time}</h2>
//             <h2><BiCalendarAlt font-size="24px" /> &nbsp;&nbsp; {reservation.date}</h2>
//             <h2><BiUserCircle font-size="24px" /> &nbsp;&nbsp; Table for {reservation.party_size}</h2>
//           </div>
//           <div className="card-link"><Link to="/">Book another reservation</Link></div>
//           <div className="card-link"><Link to="/profile">Manage my reservations</Link></div>
//         </div>
//       </div>
//     </div>
//   )
// }
// }

export default EditReservation