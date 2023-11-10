import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

import VisitDate from "../domain/VisitDate.js";
import OrderMenu from "../domain/OrderMenu.js";

const InputView = {
  async getVisitDate() {
    Console.print(INPUT_MESSAGE.WELCOME_MESSAGE);
    
    let input = await Console.readLineAsync(INPUT_MESSAGE.DATE_MESSAGE);
    let visitDate;

    while (true) {
      try {
        visitDate = new VisitDate(input);
        break;
      } catch (error) {
        Console.print(error.message);
        input = await Console.readLineAsync(INPUT_MESSAGE.DATE_MESSAGE);
      }
    }
    return visitDate;
  },

  async getOrderMenu() {
    let input = await Console.readLineAsync(INPUT_MESSAGE.ORDER_MESSAGE);
    let orderMenu;

    while (true) {
      try {
        orderMenu = this.createOrderMenu(input);
        break;
      } catch (error) {
        Console.print(error.message);
        input = await Console.readLineAsync(INPUT_MESSAGE.ORDER_MESSAGE);
      }
    }
    return orderMenu;
  },

  divideWithComma(input) {
    const array = input.split(","); 
    return array;
  },

  divideWithHypen(input) {
    const menus = [];
    const numbers = [];

    input.map((el) =>
      el.split("-").map((el, index) => {
        index === 0 ? menus.push(el) : numbers.push(parseInt(el));
      })
    );
    return [menus, numbers];
  },

  createOrderMenu(input) {
    const array = this.divideWithComma(input);
    const orderMenu = this.divideWithHypen(array);
    return new OrderMenu(orderMenu);
  }
  
};

export default InputView;
