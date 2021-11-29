import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }
  
  render() {
    const {restaurants} = this.props.restaurants
    console.log(restaurants)
    console.log(this.props)
    return (
      <div>
        <h1>placeholder restaurants</h1>
        <ul className="restaurant-homepage-list">
          {restaurants.map(restaurant => (
            <RestaurantIndexItem restaurant={restaurant} key={restaurant.id} />
          ))}
        </ul>
      </div>
    )
  }
}


export default RestaurantIndex