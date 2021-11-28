import React from "react";

const RestaurantIndex = ({restaurants}) => (
  <div>
    <h1>placeholder restaurants</h1>
    <ul className="restaurant-homepage-list">
      {restaurants.map(restaurant => (
      <RestaurantIndexItem restaurant={restaurant} key={restaurant.id} />
      ))}
    </ul>
  </div>
)


export default RestaurantIndex