import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import RestaurantCard from "./restaurant_card";

const mSTP = (state) => ({
  restaurants: state.entities.restaurants
})

const mDTP = dispatch => ({
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(RestaurantCard)