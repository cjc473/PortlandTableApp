import React from "react";
import { connect } from "react-redux";
import ReservationCard from "./reservation_card";
import { deleteReservation } from "../../actions/reservation_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  // restaurants: state.entities.restaurants,
  return ({
    restaurant: state.entities.restaurants[ownProps.reservation.restaurant_id]
  })
}



const mDTP = (dispatch) => ({
  deleteReservation: (reservation) => dispatch(deleteReservation(reservation.id))
})

export default connect(mSTP, mDTP)(ReservationCard)