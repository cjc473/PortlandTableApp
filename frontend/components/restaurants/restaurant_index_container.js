import { connect } from "react-redux";
import { restaurantArray } from "../../reducers/selectors";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import RestaurantIndex from "./restaurant_index";

const mSTP = state => ({
  // restaurants: Object.values(state.entities.restaurants)
  restaurants: restaurantArray(state.entities)
})

const mDTP = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mSTP, mDTP)(RestaurantIndex)