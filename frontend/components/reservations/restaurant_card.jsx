import React from "react";


class RestaurantCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // componentDidMount() {
  //   this.props.fetchRestaurant(this.props.restaurantId)
  // }

  // componentDidUpdate() {
  //   this.setState({[restaurant]: this.props.restaurants[this.props.restaurantId]})
  // }

  render() {
    // if (!this.props.restaurants) return null;
    // console.log(this.props.restaurants);
    // console.log(this.props.restaurantId);
    const { restaurants } = this.props;
    const { restaurantId } = this.props;
    // console.log(restaurants)
    const restaurant = restaurants[restaurantId];
    // console.log(restaurant)

    // console.log(this.state.restaurant)
    if (!restaurant) return null;
    return (

        <div className="restaurant-card-container">
          <div className="icon-pic" className="card-photo-container">
            <img src={restaurant.photo} />
          </div>
          <h2 className="card-confirmed-name">{restaurant.name}</h2>
        </div>

    )
  }
}

export default RestaurantCard