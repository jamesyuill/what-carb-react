export const selectRandomDish = (arr, carbType, isVeggie = false) => {
  if (!isVeggie) {
    const filteredDishes = arr.filter((item) => item.carbType === carbType);
    const randomIndex = Math.floor(Math.random() * filteredDishes.length);
    return filteredDishes[randomIndex];
  } else {
    const filteredDishes = arr.filter(
      (item) => item.carbType === carbType && item.vegetarian
    );
    const randomIndex = Math.floor(Math.random() * filteredDishes.length);
    return filteredDishes[randomIndex];
  }
};

// take an array of dishes, a carbType to filter by and maybe veggie boolean
// return one dish
//
