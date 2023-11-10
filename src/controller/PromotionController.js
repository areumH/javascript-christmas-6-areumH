import InputView from "../view/InputView.js";

class PromotionController {
  #inputView;

  constructor() {
    this.#inputView = InputView;
  }

  async startPromotion() {
    const date = await this.#inputView.getVisitDate();
  }
}

export default PromotionController;
