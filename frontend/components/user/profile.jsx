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
      <div>
        <ul>
          {reservations ? reservations.map(res => <ReservationCardContainer reservation={res}/>) : "No upcoming res"}
        </ul>
      </div>
    )
  }

}

export default Profile