import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      score: null,
      restaurant_id: this.props.restaurantId,
      author_id: this.props.userId
    }
  }

  render() {
    return "this is a review form"
  }
}

export default ReviewForm