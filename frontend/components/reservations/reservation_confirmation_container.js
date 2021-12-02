import { connect } from "react-redux";
import ReservationConfirmation from "./reservation_confirmation";
// import { fetchReservations } from "../../actions/reservation_actions";
import { fetchReservation } from "../../actions/reservation_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";


const mSTP = (state, ownProps) => ({
  reservation: state.entities.reservations[ownProps.match.params.reservationId],
  // restaurant: state.entities.restaurants[ownProps.match.params.reservationId.restaurant_id]
  // reservation: state.entities.reservations
  
  // state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]
  // restaurant: state.entities.restaurants((state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]).restaurant_id) 
})

const mDTP = (dispatch, ownProps) => ({
  fetchReservation: () => dispatch(fetchReservation(ownProps.match.params.reservationId)),
  // fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(ReservationConfirmation)
