import React from "react";

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurant();
  }

  render() {
    if (!(this.props.restaurant)) return null;
    return (
      <div className="showpage-container">
        <h1>this is a show page for {this.props.restaurant.name}!</h1>
      </div>
    )
  }
}

export default RestaurantShow