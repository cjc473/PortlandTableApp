import * as ReviewAPIUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchRestaurantReviews = restaurantId => dispatch => (
  ReviewAPIUtil.fetchRestaurantReviews(restaurantId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchUserReviews = userId => dispatch => (
  ReviewAPIUtil.fetchUserReviews(userId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = reviewId => dispatch => (
  ReviewAPIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then(newReview => dispatch(receiveReview(newReview)))
)

export const updateReview = review => dispatch => (
  ReviewAPIUtil.updateReview(review)
    .then(updatedReview => dispatch(receiveReview(updatedReview)))
)

export const deleteReview = reviewId => dispatch => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)