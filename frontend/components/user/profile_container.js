import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUserReservations } from "../../actions/reservation_actions";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations)
  // restaurants: Object.values(state.entities.restaurants)
})

const mDTP = dispatch => ({
  fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId))
})

export default connect(mSTP, mDTP)(Profile)