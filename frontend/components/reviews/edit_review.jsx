import React from "react";

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      overall: null,
      food: null,
      service: null,
      ambience: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      body: this.state.body,
      overall: this.state.overall,
      food: this.state.food,
      service: this.state.service,
      ambience: this.state.ambience,
      res_date: this.props.reservation.date,
      restaurant_id: this.props.restaurantId,
      author_id: this.props.userId
    }
    console.log(review)
    this.props.createReview(review).then(response => {
      this.props.history.push('/profile')
    })

  }

  update(field) {
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }

  componentDidMount() {
    // this.props.fetchReservation();
    this.props.fetchRestaurant();
    this.props.fetchReview();
  }

  render() {
    if (!(this.props.reservation)) return null;
    const { reservation, restaurantId, userId } = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="review-ratings-container">
            <div className="rating-row" id="overall-row">
              Overall
              <input type="radio" name="overall" id="overall-1" value="1" onChange={this.update("overall")} />
              <label htmlFor="overall-1">★</label>
              <input type="radio" name="overall" id="overall-2" value="2" onChange={this.update("overall")} />
              <label htmlFor="overall-2">★</label>
              <input type="radio" name="overall" id="overall-3" value="3" onChange={this.update("overall")} />
              <label htmlFor="overall-3">★</label>
              <input type="radio" name="overall" id="overall-4" value="4" onChange={this.update("overall")} />
              <label htmlFor="overall-4">★</label>
              <input type="radio" name="overall" id="overall-5" value="5" onChange={this.update("overall")} />
              <label htmlFor="overall-5">★</label>
            </div>
            <div className="rating-row" id="food-row">
              Food
              <input type="radio" name="food" id="food-1" value="1" onChange={this.update("food")} />
              <label htmlFor="food-1">★</label>
              <input type="radio" name="food" id="food-2" value="2" onChange={this.update("food")} />
              <label htmlFor="food-2">★</label>
              <input type="radio" name="food" id="food-3" value="3" onChange={this.update("food")} />
              <label htmlFor="food-3">★</label>
              <input type="radio" name="food" id="food-4" value="4" onChange={this.update("food")} />
              <label htmlFor="food-4">★</label>
              <input type="radio" name="food" id="food-5" value="5" onChange={this.update("food")} />
              <label htmlFor="food-5">★</label>
            </div>
            <div className="rating-row" id="service-row">
              Service
              <input type="radio" name="service" id="service-1" value="1" onChange={this.update("service")} />
              <label htmlFor="service-1">★</label>
              <input type="radio" name="service" id="service-2" value="2" onChange={this.update("service")} />
              <label htmlFor="service-2">★</label>
              <input type="radio" name="service" id="service-3" value="3" onChange={this.update("service")} />
              <label htmlFor="service-3">★</label>
              <input type="radio" name="service" id="service-4" value="4" onChange={this.update("service")} />
              <label htmlFor="service-4">★</label>
              <input type="radio" name="service" id="service-5" value="5" onChange={this.update("service")} />
              <label htmlFor="service-5">★</label>
            </div>
            <div className="rating-row" id="ambience-row">
              Ambience
              <input type="radio" name="ambience" id="ambience-1" value="1" onChange={this.update("ambience")} />
              <label htmlFor="ambience-1">★</label>
              <input type="radio" name="ambience" id="ambience-2" value="2" onChange={this.update("ambience")} />
              <label htmlFor="ambience-2">★</label>
              <input type="radio" name="ambience" id="ambience-3" value="3" onChange={this.update("ambience")} />
              <label htmlFor="ambience-3">★</label>
              <input type="radio" name="ambience" id="ambience-4" value="4" onChange={this.update("ambience")} />
              <label htmlFor="ambience-4">★</label>
              <input type="radio" name="ambience" id="ambience-5" value="5" onChange={this.update("ambience")} />
              <label htmlFor="ambience-5">★</label>
            </div>
          </div>
          <div className="review-body-container">
            <h2>Write your review</h2>
            <textarea name=""
              cols="30"
              rows="10"
              className="review-body"
              placeholder="Body goes here"
              onChange={this.update("body")}
            />
          </div>
          <div className="review-submit-container">
            <input type="submit"
              value="Submit your review"
              className="create-reservation-submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default EditReview