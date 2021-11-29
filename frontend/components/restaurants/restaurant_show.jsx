import React from "react";

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { restaurant } = this.props
    return (
      <div>
        <h1>this is a show page for {restaurant.name}!</h1>
      </div>
    )
  }
}

export default RestaurantShow