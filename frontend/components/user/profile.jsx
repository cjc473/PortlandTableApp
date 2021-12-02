import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    state: {
      reservations: this.myReservations()
    }
  }

  render() {
    <div>
      <ul>
        <li>{this.state.reservations.map(res => `this is res ${res.id}`)}</li>
      </ul>
    </div>
  }

  myReservations() {
    this.props.reservations.filter(reservation => reservation[user_id] === this.props.currentUser.id)
  }
}

export default Profile