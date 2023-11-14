import PromotionHandler from "../src/handler/PromotionHandler.js";
import OrderMenu from "../src/domain/OrderMenu.js";

describe("함수별 기능 테스트", () => {
  test("이벤트 적용 가능 금액 확인하기", () => {
    const handler = new PromotionHandler();
    const input = [
      ["해산물파스타", "제로콜라"],
      [2, 1],
    ];
    const order = new OrderMenu(input);

    const result = handler.checkLessThanMin(order);
    const output = false;

    expect(result).toEqual(output);
  });
});
