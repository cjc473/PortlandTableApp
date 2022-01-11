import React from "react";
import { Redirect } from "react-router";
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
import ProfileContainer from "./user/profile_container";
import EditReservationContainer from "./reservations/edit_reservation_container";
import ReviewFormContainer from "./reviews/review_form_container";

const App = () => (
  <div className="main">
    <ModalContainer />
    <NavbarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/reviews/:restaurantId/:reservationId" component={ReviewFormContainer}/>
      <Route path="/reservations/:restaurantId/:reservationId/confirmation" component={ReservationConfirmationContainer} />
      <Route path="/reservations/:restaurantId/:reservationId/edit" component={EditReservationContainer} />
      <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route exact path="/" component={RestaurantIndexContainer} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);



export default App;