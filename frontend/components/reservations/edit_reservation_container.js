import { connect } from "react-redux";
import { updateReservation } from "../../actions/reservation_actions";
import EditReservation from "./edit_reservation";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { fetchReservation } from "../../actions/reservation_actions";


const mSTP = (state, ownProps) => ({
  user_id: state.session.id,
  formType: "Edit Reservation",
  reservation: state.entities.reservations[ownProps.match.params.reservationId],
  restaurantId: ownProps.match.params.restaurantId
})

const mDTP = (dispatch, ownProps) => ({
  action: reservation => dispatch(updateReservation(reservation)),
  fetchReservation: () => dispatch(fetchReservation(ownProps.match.params.reservationId)),
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(EditReservation)