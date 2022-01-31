import { connect } from "react-redux";
import EditReview from "./edit_review";
// import { fetchReservation } from "../../actions/reservation_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { updateReview } from "../../actions/review_actions";
import { deleteReview } from "../../actions/review_actions";
import { fetchReview } from "../../actions/review_actions";


const mSTP = (state, ownProps) => ({
  userId: state.entities.users[state.session.id].id,
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  review: state.entities.reservations[ownProps.match.params.reviewId]
})

const mDTP = (dispatch, ownProps) => ({
  // fetchReservation: () => dispatch(fetchReservation(ownProps.match.params.reservationId)),
  fetchRestaurant: () => dispatch(fetchRestaurant(ownProps.match.params.restaurantId)),
  fetchReview: () => dispatch(fetchReview(ownProps.match.params.reviewId)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(EditReview)