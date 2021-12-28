import * as ReservationAPIUtil from '../util/reservation_api_util'

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
})

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
})

export const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
})

export const fetchUserReservations = userId => dispatch => (
  ReservationAPIUtil.fetchUserReservations(userId)
    .then(reservations => dispatch(receiveReservations(reservations)))
)

export const fetchReservations = () => dispatch => (
  ReservationAPIUtil.fetchReservations()
    .then(reservations => dispatch(receiveReservations(reservations)))
)

export const fetchReservation = reservationId => dispatch => (
  ReservationAPIUtil.fetchReservation(reservationId)
    .then(reservation => dispatch(receiveReservation(reservation)))
)

export const createReservation = reservation => dispatch => (
  ReservationAPIUtil.createReservation(reservation)
    .then(newReservation => dispatch(receiveReservation(newReservation)))
)

export const updateReservation = reservation => dispatch => (
  ReservationAPIUtil.updateReservation(reservation)
    .then(updatedReservation => dispatch(receiveReservation(updatedReservation)))
)

export const deleteReservation = reservationId => dispatch => (
  ReservationAPIUtil.deleteReservation(reservationId)
    .then(() => dispatch(removeReservation(reservationId)))
)