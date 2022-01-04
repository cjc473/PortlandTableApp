import { connect } from "react-redux";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
  restaurantId: ownProps.match.params.restaurantId,
  userId: state.entities.users[state.session.id]
})

const mDTP = (dispatch, ownProps) => ({

})

export default connect(mSTP, mDTP)(ReviewForm)