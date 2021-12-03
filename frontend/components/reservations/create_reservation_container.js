import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { createReservation } from "../../actions/reservation_actions";

const mSTP = state => ({
  userId: state.session.id,
  formType: "Make a reservation"
})

const mDTP = dispatch => ({
  action: reservation => dispatch(createReservation(reservation)),
})


export default connect(mSTP, mDTP)(ReservationForm)