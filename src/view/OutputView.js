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
    const giftMessage =
      total >= ORDER.GIFT_AMOUNT
        ? DISCOUNT_MESSAGE.GIFT
        : DISCOUNT_MESSAGE.NONE;

    Console.print(OUTPUT_MESSAGE.GIFT_MENU);
    Console.print(giftMessage);
  },

  printDiscountList(discountArray) {
    Console.print(OUTPUT_MESSAGE.DISCOUNT_LIST);

    discountArray === null
      ? Console.print(DISCOUNT_MESSAGE.NONE)
      : discountArray.forEach((array) => {
          array !== null &&
            Console.print(`${array[0]} ${this.discountWithComma(array[1])}`);
        });
  },

  printDiscountAmount(discount) {
    const discountMessage =
      discount === 0
        ? this.amountWithComma(discount)
        : this.discountWithComma(discount);

    Console.print(OUTPUT_MESSAGE.DISCOUNT_AMOUNT);
    Console.print(discountMessage);
  },

  printAfterDiscount(total) {
    Console.print(OUTPUT_MESSAGE.AFTER_DISCOUT);
    Console.print(this.amountWithComma(total));
  },

  printBadge(badge) {
    Console.print(OUTPUT_MESSAGE.BADGE_MESSAGE);
    Console.print(badge);
  },
};

export default OutputView;
