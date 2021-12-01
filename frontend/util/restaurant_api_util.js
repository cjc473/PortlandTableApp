

export const fetchRestaurants = () => (
  $.ajax({
    method: "GET",
    url: "/api/restaurants"
  })
)

export const fetchRestaurant = (restaurantId) => (
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${restaurantId}`
  })
)