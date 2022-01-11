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
      res_date: this.props.resDate,
      restaurant_id: this.props.restaurantId,
      author_id: this.props.userId
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

  render() {
    const {res_date, restaurant_id, author_id} = this.state
    return (
      <div>
        <div>
          {res_date}
          {restaurant_id}
          {author_id}
        </div>
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