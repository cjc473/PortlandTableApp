import { connect } from "react-redux";
import ReservationConfirmation from "./reservation_confirmation";
import { fetchReservation } from "../../actions/reservation_actions";


const mSTP = state => ({
  reservation: state.entities.reservations[((Object.keys(state.entities.reservations))[length - 1])]
})

const mDTP = dispatch => ({
  fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId))
})

export default connect(mSTP, mDTP)(ReservationConfirmation)
