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
  }

  isPastDate(date) {
    const todaysDate = new Date();
    if (date.getFullYear() > todaysDate.getFullYear()) return false;
    if (date.getFullMonth() > todaysDate.getMonth()) return false;
    if (date.getDate() > todaysDate.getDate()) return false;
    return true;
  }

  sortReservations(filter, reservations) {
    const past_res = reservations.filter(res => this.isPastDate(res))
    const future_res = reservations.filter(res => !(this.isPastDate(res)))
    return filter === past ? past_res : future_res
  }

  render() {
    if (!this.props.currentUser) return null;
    const { reservations } = this.props;
    return(
      <div className="profile-page-container">
        <div className="user-welcome">
          <h2 id="welcome-msg">Hi, {this.props.currentUser.first_name}.</h2>
        </div>
        <div id="upcoming-res-container" className="user-reservations-container">
          <h2 className="profile-list-header">Upcoming Reservations</h2>
          <div className="user-reservations-list">
            <ul>
              {reservations ? reservations.map(res => <ReservationCardContainer reservation={res} />) : "No upcoming res"}
            </ul>
          </div>
        </div>
        <div id="past-res-container" className="user-reservations-container">
          <h2 className="profile-list-header">Dining History</h2>
          <div className="user-reservations-list">
            <ul>
              {reservations ? reservations.map(res => <ReservationCardContainer reservation={res} />) : "No upcoming res"}
            </ul>
          </div>
        </div>
      </div>

    )
  }

}

export default Profile