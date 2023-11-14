import { Console } from "@woowacourse/mission-utils";
import { ORDER } from "../constants/constants.js";
import { DISCOUNT_MESSAGE, OUTPUT_MESSAGE } from "../constants/messages.js";

const OutputView = {
  printOrderMenu(orderMenu) {
    Console.print(OUTPUT_MESSAGE.EVENT_MESSAGE);
    Console.print(OUTPUT_MESSAGE.MENU_LIST);

    const [menus, numbers] = orderMenu.getOrderMenu();

    menus.forEach((menu, index) => {
      Console.print(`${menu} ${numbers[index]}개`);
    });
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

  printOrderList(order) {
    const totalAmount = order.getTotalAmount();

    this.printOrderMenu(order);
    this.printOrderAmount(totalAmount);
    this.printGiftMenu(totalAmount);
  },

  printDiscountList(discountArray) {
    Console.print(OUTPUT_MESSAGE.DISCOUNT_LIST);

    if (!discountArray) {
      Console.print(DISCOUNT_MESSAGE.NONE);
      return;
    }

    discountArray.forEach((array) => {
      if (array)
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
