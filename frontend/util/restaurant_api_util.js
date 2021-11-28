export const fetchRestaurants = (data) => (
  $.ajax({
    method: "GET",
    url: "/api/restaurants",
    data
  })
)

export const fetchRestaurant = (restaurantId) => (
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${restaurantId}`
  })
)