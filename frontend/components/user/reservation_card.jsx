import React from "react";

class ReservationCard extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   reservation: this.props.reservation,
    //   restaurant: this.props.restaurants[reservation.restaurant_id]
    // }
  }

  componentDidMount() {
    // this.props.fetchRestaurants()
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
        <p>{restaurant.name}</p>
        <p>{reservation.time}</p>
        <br />
      </div>
    )
  }
}

export default ReservationCard