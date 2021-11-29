export const restaurantArray = ({ restaurants }) => (
  Object.keys(restaurants).map(key => restaurants[key])
);
