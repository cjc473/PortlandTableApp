import React from "react";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party_size: 2,
      date: (this.props.date ? this.props.date : this.todayDateStr()),
      time: (this.props.time ? this.props.time : "7:00 PM"),
      user_id: this.props.userId,
      restaurant_id: this.props.restaurantId
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.todayDateStr = this.todayDateStr.bind(this)
    this.update = this.update.bind(this)
  }

  //restaurant_id and user_id passed in as props

  todayDateStr() {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    const day = todaysDate.getDate();
    const month = todaysDate.getMonth() + 1;
    return `${year}-${month}-${day}`;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
  }

  update(e) {
    return e => (
      this.setState({ [field]: e.target.value })
    )
  }


  render() {
    return (
      <form className="create-res-form" onSubmit={this.handleSubmit}>
        <h1 id="create-res-header">Make a reservation</h1>
        <div id="res-form-shadow" className="showpage-shadow">
          <div className="showpage-size-select-container">
            <h2>Party Size</h2>
            <select type="text" className="showpage-size-select">
              <option value="2">For 2</option>
              <option value="3">For 3</option>
              <option value="4">For 4</option>
              <option value="5">For 5</option>
              <option value="6">For 6</option>
              <option value="7">For 7</option>
              <option value="8">For 8</option>
              <option value="9">For 9</option>
              <option value="10">For 10</option>
            </select>
          </div>
          <div className="showpage-date-time-container">
            <div className="showpage-date-container">
              <h2>Date</h2>
              <input type="date"
                className="showpage-date-select"
                min={this.date}
                defaultValue={this.date}
                onChange={this.update("date")}
              />
            </div>
            <div className="showpage-time-container">
              <h2>Time</h2>
              <select type="text" 
                value={this.state.time} 
                onChange={this.update("time")} 
                className="showpage-time-select"
              >
                <option value="1100am">11:00 AM</option>
                <option value="1130am">11:30 AM</option>
                <option value="1200pm">12:00 PM</option>
                <option value="1230pm">12:30 PM</option>
                <option value="1000am">6:00 PM</option>
                <option value="1030am">6:30 PM</option>
                <option value="1100am">7:00 PM</option>
                <option value="1130am">7:30 PM</option>
                <option value="1200pm">8:00 PM</option>
                <option value="1230pm">8:30 PM</option>
              </select>
            </div>
          </div>
          <div className="showpage-submit-container">
            <input type="submit"
              value="Let's go"
              className="create-reservation-submit"
            />
          </div>
        </div>
      </form>
    )
  }
}

export default ReservationForm