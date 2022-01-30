import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUserReservations } from "../../actions/reservation_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import { fetchUserReviews } from "../../actions/review_actions";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations),
  reviews: Object.values(state.entities.reviews),
  reviewsObject: state.entities.reviews
})

const mDTP = dispatch => ({
  fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),
  fetchRestaurants: () => dispatch(fetchRestaurants()),
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId))
}) 

export default connect(mSTP, mDTP)(Profile)