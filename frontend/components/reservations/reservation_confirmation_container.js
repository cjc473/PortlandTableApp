import { connect } from "react-redux";
import ReservationConfirmation from "./reservation_confirmation";
// import { fetchReservations } from "../../actions/reservation_actions";
import { fetchReservation } from "../../util/reservation_api_util";


const mSTP = state => ({
  // reservation: state.entities.reservations
  
  // state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]
  // restaurant: state.entities.restaurants((state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]).restaurant_id) 
})

const mDTP = dispatch => ({
  fetchReservation: () => dispatch(fetchReservation())
})

export default connect(mSTP, mDTP)(ReservationConfirmation)
