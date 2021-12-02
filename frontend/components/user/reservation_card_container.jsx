import React from "react";
import { connect } from "react-redux";
import ReservationCard from "./reservation_card";
import { fetchRestaurants } from "../../actions/restaurant_actions";

const mSTP = state => ({
  restaurants: state.entities.restaurants
})

const mDTP = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mSTP, mDTP)(ReservationCard)