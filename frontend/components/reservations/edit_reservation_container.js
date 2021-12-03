import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { updateReservation } from "../../actions/reservation_actions";


const mSTP = state => ({
  user_id: state.session.id,
  formType: "Edit Reservation"
})

const mDTP = dispatch => ({
  action: reservation => dispatch(updateReservation(reservation))
})


export default connect(mSTP)(mDTP)(ReservationForm)