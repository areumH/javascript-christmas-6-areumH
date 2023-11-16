import { MENU, DATE, ORDER } from "../constants/constants.js";

const Validator = {
  checkVisitDate(date) {
    return isNaN(date) || date < DATE.MIN_RANGE || date > DATE.MAX_RANGE;
  },

  isNotValidMenu(input) {
    const allMenu = MENU.map((item) => item.name);
    return !allMenu.includes(input);
  },

  checkValidMenu(menus) {
    for (const menu of menus) {
      if (this.isNotValidMenu(menu)) {
        return true;
      }
    }
    return false;
  },

  checkDuplicates(menus) {
    return new Set(menus).size !== menus.length;
  },

  getDrinkMenu(menus) {
    const drinkMenu = MENU.filter((item) => item.type === "DRINK").map(
      (item) => item.name
    );
    return menus.filter((menu) => drinkMenu.includes(menu)).length;
  },

  checkIsAllDrink(menus) {
    return this.getDrinkMenu(menus) === menus.length;
  },

  isNotValidNumber(input) {
    return isNaN(input) || input < ORDER.MIN_RANGE;
  },

  getSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  },

  checkOrderNumber(numbers) {
    for (const number of numbers) {
      if (this.isNotValidNumber(number)) {
        return true;
      }
    }
    return false;
  },

  checkMoreThanTwenty(numbers) {
    return this.getSum(numbers) > ORDER.MAX_RANGE;
  },
};

export default Validator;
