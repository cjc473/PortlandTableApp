import { connect } from "react-redux";
import RestaurantShow from "./restaurant_show";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { openModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
})

const mDTP = (dispatch, ownProps) => ({
  fetchRestaurant: () => dispatch(fetchRestaurant(ownProps.match.params.restaurantId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(RestaurantShow)