import React from "react";
import { BiTimeFive, BiCalendarAlt, BiUserCircle } from 'react-icons/bi'
import { Link } from "react-router-dom";

class ReservationCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // this.props.fetchRestaurants()
  }

  handleDelete() {
    this.props.deleteReservation(this.props.reservation);
  }

  manageRes() {
    const { reservation, restaurant } = this.props;
    return (
      <div className="reservation-card-button-container">
        <Link to={`/reservations/${restaurant.id}/${reservation.id}/edit`}><button className="reservation-card-button">Modify</button></Link>
        <button className="reservation-card-button" onClick={() => this.handleDelete()}>Cancel</button>
      </div>
    )
  }

  manageReview() {
    const { reservation, restaurant, review } = this.props;
    console.log(review)
    return (
      <div>
        {review === false ? <Link to={`/reviews/${restaurant.id}/${reservation.id}`}>Write a review!</Link> : <Link to={`/reviews/${restaurant.id}/${reservation.id}`}>Edit Review</Link>}
      </div>
    )
  }

  render() {
    if ((!this.props.restaurant) || (!this.props.reservation)) return null;
    const {reservation, restaurant} = this.props;
    return (
      <div>
        <div className="reservation-card-container">
          <div className="reservation-card-pic"><img src={restaurant.photo} alt="" /></div>
          <div className="reservation-card-text-container">
            <div className="reservation-card-details">
              <h2>{restaurant.name}</h2>
              <p><BiTimeFive fontSize="24px" /> &nbsp;&nbsp;{reservation.time}</p>
              <p><BiCalendarAlt fontSize="24px" /> &nbsp;&nbsp;{reservation.date}</p>
              <p><BiUserCircle fontSize="24px" /> &nbsp;&nbsp;Table for {reservation.party_size}</p>
            </div>
            {this.props.upcoming ? this.manageRes() : this.manageReview()}
          </div>
        </div>
      </div>
    )
  }
}

export default ReservationCard