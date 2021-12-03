import React from "react";

class EditReservation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchReservation();
    this.props.fetchRestaurant(this.props.restaurantId);
  }

  render () {
    return(
      <div>
        this is an edit form
      </div>
    )

  }
}

export default EditReservation