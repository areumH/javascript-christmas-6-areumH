import { Console } from "@woowacourse/mission-utils";
import { ORDER } from "../constants/constants.js";
import { DISCOUNT_MESSAGE, OUTPUT_MESSAGE } from "../constants/messages.js";

const OutputView = {
  printOrderMenu(orderMenu) {
    Console.print(OUTPUT_MESSAGE.EVENT_MESSAGE);
    Console.print(OUTPUT_MESSAGE.MENU_LIST);

    orderMenu.printOrderMenu();
  },

  amountWithComma(input) {
    return `${input.toLocaleString()}원`;
  },

  discountWithComma(input) {
    return `-${this.amountWithComma(input)}`;
  },

  printOrderAmount(total) {
    Console.print(OUTPUT_MESSAGE.BEFORE_DISCOUNT);
    Console.print(this.amountWithComma(total));
  },

  printGiftMenu(total) {
    const message =
      total >= ORDER.GIFT_AMOUNT
        ? DISCOUNT_MESSAGE.GIFT
        : DISCOUNT_MESSAGE.NONE;

    Console.print(OUTPUT_MESSAGE.GIFT_MENU);
    Console.print(message);
  },

  printDiscountList(discountArray) {
    Console.print(OUTPUT_MESSAGE.DISCOUNT_LIST);

    discountArray.forEach((array) => {
      array !== null &&
        Console.print(`${array[0]} ${this.discountWithComma(array[1])}`);
    });
  },

  printDiscountAmount(discount) {
    Console.print(OUTPUT_MESSAGE.DISCOUNT_AMOUNT);
    Console.print(this.discountWithComma(discount));
  },
};

export default OutputView;
