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
    return (
      <div>
        <form>
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
          <input type="text"
            
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
          />
        </form>
      </div>
    )
  }
}

export default ReviewForm