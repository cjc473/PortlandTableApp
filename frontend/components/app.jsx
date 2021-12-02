import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Footer from "./footer";
import ModalContainer from "./modal/modal_container";
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import RestaurantShowContainer from "./restaurants/restaurant_show_container";
import ReservationConfirmationContainer from "./reservations/reservation_confirmation_container";


const App = () => (
  <div className="main">
    <ModalContainer />
    <NavbarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/reservations/confirmation" component={ReservationConfirmationContainer} />
      <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route exact path="/" component={RestaurantIndexContainer} />
    </Switch>
    <Footer />
  </div>
);



export default App;