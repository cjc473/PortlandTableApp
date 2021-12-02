import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchUserReservations(this.props.currentUser.id)
  }

  render() {
    if (!this.props.currentUser) return null;
    const { reservations } = this.props;
    // if (!reservations) return null;
    return(
      <div>
        <ul>
          {reservations ? reservations.map(res => `this is res ${res.id}`) : "No upcoming res"}
        </ul>
      </div>
    )
  }

}

export default Profile