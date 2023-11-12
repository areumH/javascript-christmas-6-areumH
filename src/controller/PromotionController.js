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

    const discountAmount = this.#getDiscountAmount(discountArray);
    this.#outputView.printDiscountAmount(discountAmount);
    this.#outputView.printAfterDiscount(
      this.#getAfterDiscount(order, discountArray)
    );

    const badge = this.#getEventBadge(discountAmount);
    this.#outputView.printBadge(badge);
  }

  #getDiscountArray(order, date) {
    if (this.#handler.checkLessThanMin(order)) return null;
    
    let array = [];

    array.push(this.#handler.getChristmasDiscount(date));
    array.push(this.#handler.getWeekDiscount(order, date));
    array.push(this.#handler.getStarDiscount(date));
    array.push(this.#handler.getGiftDiscount(order));

    return array;
  }

  #getArraySum(array) {
    if (array === null) return 0;
    return array.reduce((total, arr) => total + arr[1], 0);
  }

  #getDiscountAmount(array) {
    if (array === null) return 0;
    
    const discountArray = array.filter((el) => el !== null);
    return this.#getArraySum(discountArray);
  }
  
  #getAfterDiscount(order, array) {
    const totalAmount = order.getTotalAmount();
    const discountArray = array === null ? null : array.slice(0, -1).filter((el) => el !== null);
    return totalAmount - this.#getArraySum(discountArray);
  }

  #getEventBadge(discount) {
    return this.#handler.getBadge(discount);
  }
}

export default PromotionController;
