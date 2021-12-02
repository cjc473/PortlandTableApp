import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: this.myReservations()
    }
  }

  render() {
    const { reservations } = this.state
    return(
      <div>
        <ul>
          <li>{reservations ? reservations.map(res => `this is res ${res.id}`) : "No upcoming res"}</li>
        </ul>
      </div>
    )
  }

  myReservations() {
    this.props.reservations.filter(reservation => reservation[user_id] === this.props.currentUser.id)
  }
}

export default Profile