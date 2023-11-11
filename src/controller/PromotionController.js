import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class PromotionController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async startPromotion() {
    const date = await this.#inputView.getVisitDate();
    const order = await this.#inputView.getOrderMenu();
    this.#outputView.printOrderMenu(order);
    this.#outputView.printOrderAmount(order.getTotalAmount());
  }
}

export default PromotionController;

