import { MENU } from "../constants/constants.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

import Validator from "../validators/Validator.js";

class OrderMenu {
  #menus;
  #numbers;

  constructor(input) {
    this.#validate(input);
    this.#menus = input[0];
    this.#numbers = input[1];
  }

  #validate(input) {
    const menus = input[0];
    const numbers = input[1];

    this.#validateMenu(menus);
    this.#validateNumber(numbers);
  }
  
  #validateMenu(menus) {
    if (Validator.checkValidMenu(menus)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    if (Validator.checkDuplicates(menus)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    if (Validator.checkIsAllDrink(menus)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
  
  #validateNumber(numbers) {
    if (Validator.checkOrderNumber(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    if (Validator.checkMoreThanTwenty(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }

  getOrderMenu() {
    return [this.#menus, this.#numbers];
  }

  getTotalAmount() {
    return this.#menus.reduce((total, el, index) => {
      const menu = MENU.find((item) => item.name === el);
      return total + menu.price * this.#numbers[index];
    }, 0);
  }

  #getMenuByType(type) {
    return MENU.filter((item) => item.type === type).map((item) => item.name);
  }

  #getCountByType(type) {
    return this.#menus.reduce((total, el, index) => {
      return type.includes(el) ? total + this.#numbers[index] : total;
    }, 0);
  }

  getMainCount() {
    const mainMenu = this.#getMenuByType("MAIN");
    return this.#getCountByType(mainMenu);
  }

  getDessertCount() {
    const dessertMenu = this.#getMenuByType("DESSERT");
    return this.#getCountByType(dessertMenu);
  }
}

export default OrderMenu;
