import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { fetchReservation } from "../../actions/reservation_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";


const mSTP = (state, ownProps) => ({
  userId: state.entities.users[state.session.id],
  restaurantId: ownProps.match.params.restaurantId,
  reservation: state.entities.reservations[ownProps.match.params.reservationId]
})

const mDTP = (dispatch, ownProps) => ({
  fetchReservation: () => dispatch(fetchReservation(ownProps.match.params.reservationId)),
  fetchRestaurant: () => dispatch(fetchRestaurant(ownProps.match.params.restaurantId))
})

export default connect(mSTP, mDTP)(ReviewForm)