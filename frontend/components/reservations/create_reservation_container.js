import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { createReservation } from "../../actions/reservation_actions";


const mSTP = state => ({
  user_id: state.session.id,
  formType: "Create Reservation"
})

const mDTP = dispatch => ({
  action: reservation => dispatch(createReservation(reservation))
})


export default connect(mSTP)(mDTP)(ReservationForm)