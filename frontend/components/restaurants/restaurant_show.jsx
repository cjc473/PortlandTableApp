import React from "react";

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurant();
  }

  render() {
    if (!this.props.restaurant) return null;
    const { restaurant } = this.props;
    return (
      <div className="showpage-container">
        <div className="showpage-banner" />
        <div className="showpage-rest-details">
          <h1 className="showpage-name">{restaurant.name}</h1>
          <p>{restaurant.description}</p>
        </div>
      </div>
    )
  }
}

export default RestaurantShow