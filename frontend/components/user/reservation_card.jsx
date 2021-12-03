import React from "react";
import { BiTimeFive, BiCalendarAlt, BiUserCircle } from 'react-icons/bi'
import { Link } from "react-router-dom";

class ReservationCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      editFormOn: false
    }
  }

  componentDidMount() {
    // this.props.fetchRestaurants()
  }

  handleDelete() {
    this.props.deleteReservation(this.props.reservation);
  }

  toggleEdit() {
    if (this.state.editFormOn) {
      this.setState({ [editFormOn]: false })
    } else {
      this.setState(({ [editFormOn]: true }))
    }
  }


  render() {
    if ((!this.props.restaurant) || (!this.props.reservation)) return null;
    const {reservation, restaurant} = this.props;
    console.log("props below")
    // console.log(this.props)
    // const restaurant = this.props.restaurants[reservation.restaurant_id]
    console.log(restaurant)
    // console.log(restaurant.id)
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
            <div className="reservation-card-button-container">
              <button className="reservation-card-button" onClick={() => this.toggleEdit()}>Modify</button>
              <button className="reservation-card-button" onClick={() => this.handleDelete()}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="editFormContainer">
          {this.state.editFormOn ? "hi" : "goodbye"}
        </div>
      </div>
    )
  }
}

export default ReservationCard