import React from "react";
import { connect } from "react-redux";
import ReservationCard from "./reservation_card";
import { fetchRestaurants } from "../../actions/restaurant_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  // restaurants: state.entities.restaurants,
  return ({
    restaurant: state.entities.restaurants[ownProps.reservation.restaurant_id]
  })
}



// const mDTP = dispatch => ({
//   fetchRestaurants: () => dispatch(fetchRestaurants())
// })

export default connect(mSTP, null)(ReservationCard)