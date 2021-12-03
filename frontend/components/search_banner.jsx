import React from "react";
import { BiTimeFive, BiCalendarAlt, BiUserCircle } from 'react-icons/bi'

const SearchBanner = () => {

  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  let day = todaysDate.getDate();
  const month = todaysDate.getMonth() + 1;
  if (day < 10) {
    day = `0${day}`
  }

  return (
    <div className="banner-container">
      <h2 className="banner-message">Find your table for any occasion</h2>
      <div className="search-bar-container"> 
        <div className="table-options">
          <input type="date" 
            className="date-select" 
            min={`${year}-${month}-${day}`}
            defaultValue={`${year}-${month}-${day}`}
          />

          <div id="banner-calendar"className="icon-wrapper">
            <BiCalendarAlt fontSize="24px"/>
          </div>
          <div id="banner-person" className="icon-wrapper">
            <BiUserCircle fontSize="24px"/>
          </div>
          <div id="banner-clock" className="icon-wrapper">
            <BiTimeFive fontSize="24px"/>
          </div>
          <select type="text" className="time-select">
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
          <select type="text" className="size-select">
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
        <div className="table-options-right">
          <input type="text"
            value=""
            className="search-field"
            placeholder="Restaurant or Cuisine"
          />
          <input type="submit"
            value="Let's go"
            className="search-submit"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBanner;