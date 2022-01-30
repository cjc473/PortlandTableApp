import React from "react";
import ReservationCardContainer from "./reservation_card_container";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchUserReservations(this.props.currentUser.id);
    this.props.fetchRestaurants();
    this.props.fetchUserReviews(this.props.currentUser.id);
  }

  isPastDate(date) {
    const dateArr = date.split("-")
    const year = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const day = Number(dateArr[2]);
    const todaysDate = new Date();
    if (year < todaysDate.getFullYear()) return true;
    if (month < todaysDate.getMonth()) return true;
    if (day < todaysDate.getDate()) return true;
    return false;
  }

  sortReservations(filter, reservations) {
    const past_res = reservations.filter(res => this.isPastDate(res.date))
    const future_res = reservations.filter(res => !(this.isPastDate(res.date)))
    return filter === "past" ? past_res : future_res
  }

  hasReviewed() {
    const restaurantIds = {}
    const { reviews } = this.props
    reviews.forEach(review => {
      restaurantIds[review.restaurant_id] = review.id 
    }) 
    return restaurantIds
  }

  //have list of restaurant ids with review ids
  //have an array of past reservations
  // if reservation.restaurant_id is key in restaurantIds:
    //show edit/delete reservation link
    //pass existing review as prop
  // else have link to write new review
  // reviewedRestaurants[reservation.restaurant_id] ? reviewsObject[reviewedRestaurants[reservation.restaurant_id]] : false

  render() {
    if (!this.props.currentUser) return null;
    const { reservations } = this.props;
    let past_res
    let future_res
    if (reservations) { 
      past_res = this.sortReservations("past", reservations)
      future_res = this.sortReservations("future", reservations)
    }
    const reviewedRestaurants = this.hasReviewed();
    return (
      <div className="profile-page-container">
        <div className="user-welcome">
          <h2 id="welcome-msg">Hi, {this.props.currentUser.first_name}.</h2>
        </div>
        <div id="upcoming-res-container" className="user-reservations-container">
          <h2 className="profile-list-header">Upcoming Reservations</h2>
          <div className="user-reservations-list">
            <ul>
              {future_res ? future_res.map(res => <ReservationCardContainer reservation={res} upcoming={true} />) : "No Upcoming Reservations"}
            </ul>
          </div>
        </div>
        <div id="past-res-container" className="user-reservations-container">
          <h2 className="profile-list-header">Dining History</h2>
          <div className="user-reservations-list">
            <ul>
              {past_res ? past_res.map(res => <ReservationCardContainer reservation={res} upcoming={false} review={reviewedRestaurants[res.restaurant_id] ? this.props.reviewsObject[reviewedRestaurants[res.restaurant_id]] : false} />) : ""}
            </ul>
          </div>
        </div>
      </div>

    )
  }

}

export default Profile