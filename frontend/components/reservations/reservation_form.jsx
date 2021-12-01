import React from "react";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.todayDateStr = this.todayDateStr.bind(this)
  }

  todayDateStr() {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    const day = todaysDate.getDate();
    const month = todaysDate.getMonth() + 1;
    return `${year}-${month}-${day}`;
  }

  handleSubmit() {
    e.preventDefault();
  }


  render() {
    return (
      <form className="create-res-form" onSubmit={this.handleSubmit}>
        <h1 id="create-res-header">Make a reservation</h1>
        <div className="showpage-shadow">
          <div className="showpage-size-select-container">
            <h2>Party Size</h2>
            <select type="text" className="showpage-size-select">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="showpage-date-time-container">
            <div className="showpage-date-container">
              <h2>Date</h2>
              <input type="date"
                className="showpage-date-select"
                min={this.todayDateStr()}
                defaultValue={this.todayDateStr()}
              />
            </div>
            <div className="showpage-time-container">
              <h2>Time</h2>
              <select type="text" className="showpage-time-select">
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
            Find a table or Select a time:
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