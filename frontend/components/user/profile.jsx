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

  render() {
    if (!this.props.currentUser) return null;
    const { reservations } = this.props;
    // if (!reservations) return null;
    return(
      <div className="profile-page-container">
        <div className="user-welcome">
          <h2 id="welcome-msg">Hi, {this.props.currentUser.first_name}.</h2>
        </div>
        <div className="user-reservations-container">
          <h2 className="profile-list-header">Upcoming Reservations</h2>
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