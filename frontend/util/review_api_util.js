export const fetchRestaurantReviews = (restaurantId) => (
  $.ajax({
    method: "GET",
    url: `api/restaurants/${restaurantId}/reviews`
  })
)

export const fetchUserReviews = (userId) => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/reviews`
  })
)

export const fetchReview = (reviewId) => (
  $.ajax({
    method: "GET",
    url: `/api/reviews/${reviewId}`
  })
)

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: { review }
  })
)

export const updateReview = (review) => (
  $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`
  })
)



