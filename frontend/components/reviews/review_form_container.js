import { connect } from "react-redux";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
  restaurantId
})

const mDTP = (dispatch, ownProps) => ({

})

export default connect(mSTP, mDTP)(ReviewForm)