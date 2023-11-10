import { MENU, DATE, ORDER } from "../constants/constants.js";

const Validator = {
  // *** 방문 날짜 확인
  checkVisitDate(date) {
    return isNaN(date) || date < DATE.MIN_RANGE || date > DATE.MAX_RANGE;
  },

  //
  // *** 주문 메뉴 확인
  isNotValidMenu(input) {
    const allMenu = Object.values(MENU).reduce((acc, cur) => {
      cur.forEach((item) => {
        acc.push(item.name);
      });
      return acc;
    }, []);
    return !allMenu.includes(input);
  },

  checkValidMenu(menus) {
    // 메뉴 이름이 존재하지 않음
    for (const menu of menus) {
      if (this.isNotValidMenu(menu)) {
        return true;
      }
    }
    return false;
  },

  checkDuplicates(menus) {
    // 중복 메뉴
    return new Set(menus).size !== menus.length;
  },

  getDrinkMenu(menus) {
    const drinkMenu = MENU.DRINK.map((item) => item.name);
    return menus.filter((menu) => drinkMenu.includes(menu)).length;
  },

  checkIsAllDrink(menus) {
    // 음료 메뉴만 존재
    return this.getDrinkMenu(menus) === menus.length;
  },

  //
  // *** 주문 개수 확인
  isNotValidNumber(input) {
    return isNaN(input) || input < ORDER.MIN_RANGE;
  },

  getSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  },

  checkOrderNumber(numbers) {
    // 숫자가 아니거나 1 미만
    for (const number of numbers) {
      if (this.isNotValidNumber(number)) {
        return true;
      }
    }
    return false;
  },

  checkLessThanTwenty(numbers) {
    // 주문 개수 20개 초과
    return this.getSum(numbers) > ORDER.MAX_RANGE;
  },
};

export default Validator;
