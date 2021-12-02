import { connect } from "react-redux";
import ReservationConfirmation from "./reservation_confirmation";
// import { fetchReservations } from "../../actions/reservation_actions";
import { fetchReservation } from "../../actions/reservation_actions";


const mSTP = (state, ownProps) => ({
  reservation: state.entities.reservations[ownProps.match.params.reservationId]
  // reservation: state.entities.reservations
  
  // state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]
  // restaurant: state.entities.restaurants((state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]).restaurant_id) 
})

const mDTP = (dispatch, ownProps) => ({
  fetchReservation: () => dispatch(fetchReservation(ownProps.match.params.reservationId))
})

export default connect(mSTP, mDTP)(ReservationConfirmation)
