import PromotionHandler from "../handler/PromotionHandler.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class PromotionController {
  #handler;
  #inputView;
  #outputView;

  constructor() {
    this.#handler = new PromotionHandler();
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async startPromotion() {
    const date = await this.#inputView.getVisitDate();
    const order = await this.#inputView.getOrderMenu();

    this.#outputView.printOrderMenu(order);
    this.#outputView.printOrderAmount(order.getTotalAmount());
    this.#outputView.printGiftMenu(order.getTotalAmount());

    const discountArray = this.#getDiscountArray(order, date);
    this.#outputView.printDiscountList(discountArray);
    this.#outputView.printDiscountAmount(
      this.#getDiscountAmount(discountArray)
    );
  }

  #getDiscountArray(order, date) {
    let array = [];

    array.push(this.#handler.getChristmasDiscount(date));
    array.push(this.#handler.getWeekDiscount(order, date));
    array.push(this.#handler.getStarDiscount(date));
    array.push(this.#handler.getGiftDiscount(order));

    return array;
  }

  #getDiscountAmount(array) {
    const discountArray = array.filter((el) => el !== null);
    return discountArray.reduce((total, arr) => total + arr[1], 0);
  }
}

export default PromotionController;
