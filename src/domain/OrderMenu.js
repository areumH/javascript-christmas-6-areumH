import { MENU } from "../constants/constants.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

import Validator from "../validators/Validator.js";

class OrderMenu {
  menus;
  numbers;

  constructor(input) {
    this.#validate(input);
    this.menus = input[0];
    this.numbers = input[1];
  }

  #validate(input) {
    const menus = input[0];
    const numbers = input[1];

    // 메뉴 배열 확인
    if (Validator.checkValidMenu(menus)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    if (Validator.checkDuplicates(menus)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    if (Validator.checkIsAllDrink(menus)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }

    // 개수 배열 확인
    if (Validator.checkOrderNumber(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    if (Validator.checkLessThanTwenty(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }

  getTotalAmount() {
    return this.menus.reduce((total, el, index) => {
      const menu = MENU.find((item) => item.name === el);
      return total + menu.price * this.numbers[index];
    }, 0);
  }

}

export default OrderMenu;
