import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations),
  restaurants: Object.values(state.entities.restaurants)
})

// const mDTP = dispatch => ({

// })

export default connect(mSTP, null)(Profile)