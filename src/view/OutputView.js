import { Console } from "@woowacourse/mission-utils";
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
  
};

export default OutputView;
