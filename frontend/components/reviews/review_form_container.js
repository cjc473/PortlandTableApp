import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  userId: state.entities.users[state.session.id]
})

const mDTP = (dispatch, ownProps) => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm)