import { connect } from "react-redux";
import ReservationCard from "./reservation_card";

const mSTP = state => ({
  restaurants: state.entities.restaurants
})

// const mDTP = dispatch => ({

// })

export default connect(mSTP, null)(ReservationCard)