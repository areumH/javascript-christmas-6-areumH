import { MENU } from "../constants/constants.js";
import { Console } from "@woowacourse/mission-utils";
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

  printOrderMenu() {
    this.#menus.forEach((menu, index) => {
      Console.print(`${menu} ${this.#numbers[index]}개`);
    });
  }

  getTotalAmount() {
    return this.#menus.reduce((total, el, index) => {
      const menu = MENU.find((item) => item.name === el);
      return total + menu.price * this.#numbers[index];
    }, 0);
  }

  getMainCount() {
    // 메인메뉴 개수 리턴 => 주말에 개당 2023원 할인
    const mainMenu = MENU.filter((item) => item.type === "MAIN").map(
      (item) => item.name
    );

    return this.#menus.reduce((total, el, index) => {
      return mainMenu.includes(el) ? total + this.#numbers[index] : total;
    }, 0);
  }

  getDessertCount() {
    // 디저트메뉴 개수 리턴 => 평일에 개당 2023원 할인
    const dessertMenu = MENU.filter((item) => item.type === "DESSERT").map(
      (item) => item.name
    );

    return this.#menus.reduce((total, el, index) => {
      return dessertMenu.includes(el) ? total + this.#numbers[index] : total;
    }, 0);
  }
}

export default OrderMenu;
