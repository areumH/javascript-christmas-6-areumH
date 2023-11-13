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

    const discountArray = this.#getEventArray(order, date);
    this.#outputView.printDiscountList(discountArray);

    const discountAmount = this.#getDiscountAmount(discountArray);
    this.#outputView.printDiscountAmount(discountAmount);

    const total = this.#getAfterDiscount(order, discountArray);
    this.#outputView.printAfterDiscount(total);

    const badge = this.#getEventBadge(discountAmount);
    this.#outputView.printBadge(badge);
  }

  #getEventArray(order, date) {
    if (this.#handler.checkLessThanMin(order)) return null;

    let array = [];

    array.push(this.#handler.getChristmasDiscount(date));
    array.push(this.#handler.getWeekDiscount(order, date));
    array.push(this.#handler.getStarDiscount(date));
    array.push(this.#handler.getGiftDiscount(order));

    return array;
  }

  #getDiscountAmount(array) {
    return this.#handler.getTotalDiscount(array);
  }

  #getAfterDiscount(order, array) {
    const totalAmount = order.getTotalAmount();
    const discountArray = !array ? null : array.slice(0, -1);

    return totalAmount - this.#handler.getTotalDiscount(discountArray);
  }

  #getEventBadge(discount) {
    return this.#handler.getBadge(discount);
  }
}

export default PromotionController;
