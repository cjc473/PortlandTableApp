# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

users = User.create([{ first_name: "Guest", last_name: "User", email: 'demo@gmail.com', password: 'demo1234' }])

restaurant1 = Restaurant.create!(
  name: "Southpark Seafood", 
  description: "Southpark Seafood is a chic Northwest eatery featuring sustainable seafood and farm-fresh ingredients. With the area’s largest selection of oysters, a menu that changes every single day and an innovative thirteen-seat raw bar, you won’t find a better place for a dozen on the half shell.",
  price: "$$$",
  neighborhood: "Southwest", 
  primary_tag: "Seafood",
  secondary_tag: "Wine",
  tertiary_tag: "Patio"
)

restaurant2 = Restaurant.create!(
  name: "Brix Tavern", 
  description: "Already open ten years and counting, this neighborhood establishment is still a go-to for easy drinking, a variety of plates, and overall good times. Ideal for large groups, the menu features seasonal, global-inspired tavern fare, extensive craft beer offerings and original handcrafted cocktails.",
  price: "$$", 
  neighborhood: "Pearl District", 
  primary_tag: "Brunch",
  secondary_tag: "Comfort Food",
  tertiary_tag: "Happy Hour"
)

restaurant3 = Restaurant.create!(
  name: "Cafe Du Berry", 
  description: "Café Du Berry is a breakfast and brunch restaurant, specializing in French cuisine. The owners of the restaurant turned a Victorian house into an elegant French themed café. Café Du Berry offers a warm, inviting and rustic ambiance.",
  price: "$$", 
  neighborhood: "Corbett", 
  primary_tag: "French",
  secondary_tag: "Brunch",
  tertiary_tag: "Wine"
)

restaurant4 = Restaurant.create!(
  name: "Fogo de Chao", 
  description: "Fogo de Chao is the leading Brazilian steakhouse specializing in fire-roasting high-quality meats since 1979 utilizing the centuries-old Southern Brazilian cooking technique of churrasco.",
  price: "$$$", 
  neighborhood: "Southwest", 
  primary_tag: "Steakhouse",
  secondary_tag: "Brazilian",
  tertiary_tag: "Happy Hour"
)

restaurant5 = Restaurant.create!(
  name: "Marcos Cafe", 
  description: "Marco’s Cafe and Espresso Bar, in the heart of Southwest Portland’s charming Multnomah Village, has been serving up consciously-sourced fare since 1983. We hope you’ll join us under the umbrellas, in the historic Nelson Thomas building, next time you’re in need of some nourishment.",
  price: "$$", 
  neighborhood: "Southwest", 
  primary_tag: "Brunch",
  secondary_tag: "Beer",
  tertiary_tag: "Patio"
)

restaurant6 = Restaurant.create!(
  name: "Olympia Provisions", 
  description: "Tucked into one of Portland’s beautifully restored industrial buildings, Olympia Provisions Southeast has grown from establishing the city’s first Salumeria to being a destination for refined, European-style dishes.",
  price: "$$", 
  neighborhood: "Southeast", 
  primary_tag: "Mediterranean",
  secondary_tag: "Spanish",
  tertiary_tag: "Healthy"
)

restaurant7 = Restaurant.create!(
  name: "Urban Farmer", 
  description: "Urban Farmer Portland is a modern American steakhouse featuring indigenous and locally sourced food products from artisanal craftsmen. Located in the lobby of the Nines Hotel, a luxury collection property, Urban Farmer features refined dining in an elegantly understated atmosphere.",
  price: "$$$$", 
  neighborhood: "Downtown", 
  primary_tag: "Steakhouse",
  secondary_tag: "Cocktails",
  tertiary_tag: "Wine"
)

restaurant8 = Restaurant.create!(
  name: "Verde Cocina", 
  description: "Verde Cocina brings the best of NW bounty to you with a fusion of Mexican flavors. Since 2009 we've been working with local farmers and purveyors to source the freshest ingredients we can find. Looking for a juicy steak, a delicious cheese filled quesadilla, AND a hearty vegan entree to satisfy everyone in your group? You've come to the right place.",
  price: "$$", 
  neighborhood: "Pearl District", 
  primary_tag: "Mexican",
  secondary_tag: "Gluten-Free",
  tertiary_tag: "Vegan-Friendly"
)

restaurant9 = Restaurant.create!(
  name: "Thirsty Lion", 
  description: "Our mission is to evolve the gastropub business by combining the traditional values of European and American pubs, to create a place where friends and family can celebrate life and enjoy handcrafted food, beers and cocktails.",
  price: "$$", 
  neighborhood: "Southwest", 
  primary_tag: "Gastropub",
  secondary_tag: "Beer",
  tertiary_tag: "Happy Hour"
)

restaurant10 = Restaurant.create!(
  name: "McMenamins", 
  description: "Open daily for breakfast, lunch and dinner. Choose from an innovative menu of Northwest cuisine and traditional favorites with seasonal ingredients. Take your pick from a selection of McMenamins' own handcrafted ales brewed onsite.",
  price: "$$", 
  neighborhood: "Southeast", 
  primary_tag: "Fusion",
  secondary_tag: "Beer",
  tertiary_tag: "Patio"
)