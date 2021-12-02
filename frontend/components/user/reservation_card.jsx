import React from "react";

class ReservationCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    if (!this.props.restaurants) return null;
    const {reservation} = this.props;
    console.log("props below")
    console.log(this.props)
    const restaurant = this.props.restaurants[reservation.restaurant_id]
    console.log(restaurant)
    return (
      <div>
        <p>{restaurant.name}</p>
        <p>{reservation.time}</p>
        <br />
      </div>
    )
  }
}

export default ReservationCard