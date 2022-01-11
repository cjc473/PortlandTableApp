import { connect } from "react-redux";
import ReviewForm from "./review_form";


const mSTP = (state, ownProps) => ({
  userId: state.entities.users[state.session.id],
  restaurantId: ownProps.match.params.restaurantId,
  resDate: (state.entities.reservations[ownProps.match.params.reservationId]).date
})

const mDTP = (dispatch, ownProps) => ({
  
})

export default connect(mSTP, mDTP)(ReviewForm)