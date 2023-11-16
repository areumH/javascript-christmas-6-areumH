import PromotionController from "./controller/PromotionController.js";

class App {
  async run() {
    const promotionController = new PromotionController();
    await promotionController.startPromotion();
  }
}

export default App;
