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
    const {restaurants} = this.props
    return (
      <div className="homepage-restaurants-container">
        <div className="homepage-restaurant-header-container">
          <h2 className="homepage-restaurant-header">Book for dinner tonight</h2>
          <ul className="homepage-restaurant-list">
            {(restaurants).map(restaurant => (
              <RestaurantIndexItem restaurant={restaurant} key={restaurant.id} />
            ))}
          </ul>
        </div>
        <div className="homepage-restaurant-header-container">
          <h2 className="homepage-restaurant-header">Outdoor dining</h2>
        </div>
        <div className="homepage-restaurant-header-container">
          <h2 className="homepage-restaurant-header">New to PortlandTable</h2>
        </div>
      </div>
    )
  }
}


export default RestaurantIndex