import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      overall: null,
      food: null,
      service: null,
      ambience: null,
      res_date: null,
      restaurant_id: null,
      author_id: null
      // res_date: this.props.reservation.date,
      // restaurant_id: this.props.restaurantId,
      // author_id: this.props.userId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  componentDidMount() {
    this.props.fetchReservation();
    this.props.fetchRestaurant();
  }

  render() {
    if (!(this.props.reservation)) return null;
    const {reservation, restaurantId, userId} = this.props
    console.log(reservation.date)
    console.log(restaurantId)
    console.log(userId)
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="review-form">
          <h2>Write your review</h2>
          <input type="text" 
            className="review-title"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title goes here"
            />
          <textarea name="" 
            cols="30" 
            rows="10"
            className="review-body"
            value={this.state.body}
            placeholder="Body goes here" 
            />
        </form>
      </div>
    )
  }
}

export default ReviewForm