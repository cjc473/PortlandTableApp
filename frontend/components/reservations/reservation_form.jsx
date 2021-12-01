import React from "react";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this)

    this.todaysDate = new Date();
    this.year = todaysDate.getFullYear();
    this.day = todaysDate.getDate();
    this.month = todaysDate.getMonth() + 1;
  }



  handleSubmit() {
    e.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 id="create-res-header">Make a reservation</h1>
        <div>
          Party Size
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
        <div>
          <div>
            Date
            <input type="date"
              className="showpage-date-select"
              min={`${year}-${month}-${day}`}
              defaultValue={`${year}-${month}-${day}`}
            />
          </div>
          <div>
            Time
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
        Find a table or Select a time:
        <input type="submit"
          value="Let's go"
          className="create-reservation-submit"
        />
      </form>
    )
  }
}

export default ReservationForm