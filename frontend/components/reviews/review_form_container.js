import { connect } from "react-redux";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
  userId: state.entities.users[state.session.id]
})

// const mDTP = (dispatch, ownProps) => ({

// })

export default connect(mSTP, null)(ReviewForm)