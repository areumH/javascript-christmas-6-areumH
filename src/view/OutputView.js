import { Console } from "@woowacourse/mission-utils";
import { ORDER } from "../constants/constants.js";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

const OutputView = {
  printOrderMenu(orderMenu) {
    Console.print(OUTPUT_MESSAGE.EVENT_MESSAGE);
    Console.print(OUTPUT_MESSAGE.MENU_LIST);

    orderMenu.menus.forEach((menu, index) =>
      Console.print(`${menu} ${orderMenu.numbers[index]}개`)
    );
  },

  printOrderAmount(total) {
    Console.print(OUTPUT_MESSAGE.BEFORE_DISCOUNT);
    Console.print(`${total.toLocaleString()}원`);
  },

  printGiftMenu(total) {
    Console.print(OUTPUT_MESSAGE.GIFT_MENU);
    const message = total >= ORDER.GIFT_AMOUNT ? "샴페인 1개" : "없음";
    Console.print(message);
  }
  
};

export default OutputView;
