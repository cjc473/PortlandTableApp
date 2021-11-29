@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! "api/restaurants/restaurant", restaurant: restaurant
    json.photo url_for(restaurant.photo)
  end
end