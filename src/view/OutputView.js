import { Console } from "@woowacourse/mission-utils";
import { ORDER } from "../constants/constants.js";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

const OutputView = {
  printOrderMenu(orderMenu) {
    Console.print(OUTPUT_MESSAGE.EVENT_MESSAGE);
    Console.print(OUTPUT_MESSAGE.MENU_LIST);

    orderMenu.printOrderMenu();
  },

  printOrderAmount(total) {
    Console.print(OUTPUT_MESSAGE.BEFORE_DISCOUNT);
    Console.print(this.amountWithComma(total));
  },

  printGiftMenu(total) {
    const message = total >= ORDER.GIFT_AMOUNT ? "샴페인 1개" : "없음";

    Console.print(OUTPUT_MESSAGE.GIFT_MENU);
    Console.print(message);
  },

  printDisountList(discountArray) { 
    Console.print(OUTPUT_MESSAGE.DISCOUNT_LIST);

    discountArray.forEach((array) => {
      if (array !== null) {
        Console.print(`${array[0]} ${this.discountWithComma(array[1])}`);
      }
    });
  },

  amountWithComma(input) {
    return `${input.toLocaleString()}원`;
  },

  discountWithComma(input) {
    return `-${this.amountWithComma(input)}`;
  },
};

export default OutputView;
