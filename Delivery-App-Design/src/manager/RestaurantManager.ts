import Restaurant from "../models/restaurant";

class RestaurantManager {
  private static mangagerInstance: RestaurantManager | null = null;
  private Restaurants = [] as Restaurant[];

  private constructor() {}

  static getInstance() {
    if (this.mangagerInstance) {
      return this.mangagerInstance;
    }
    this.mangagerInstance = new RestaurantManager();
    return this.mangagerInstance;
  }

  addRestaurant(restaurant: Restaurant) {
    this.Restaurants.push(restaurant);
  }
}

export default RestaurantManager;