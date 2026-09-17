import MenuItem from "./menu-item";

class Restaurant {
  private id: string;
  private name: string;
  private address: string;
  private menuItems = [] as MenuItem[];

  constructor(id: string, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  addMenuItem(menuItem: MenuItem) {
    this.menuItems.push(menuItem);
  }
}
export default Restaurant;