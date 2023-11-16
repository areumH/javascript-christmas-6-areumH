import PromotionHandler from "../src/handler/PromotionHandler.js";
import VisitDate from "../src/domain/VisitDate.js";
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

  test("총혜택 금액 확인하기", () => {
    const handler = new PromotionHandler();
    const input = [
      ["해산물파스타", "아이스크림", "제로콜라"],
      [2, 1, 1],
    ];
    const date = new VisitDate(3);
    const order = new OrderMenu(input);
    const array = [
      handler.getChristmasDiscount(date),
      handler.getWeekDiscount(order, date),
      handler.getStarDiscount(date),
      handler.getGiftDiscount(order),
    ];
    
    const result = handler.getTotalDiscount(array);
    const output = 4223;

    expect(result).toEqual(output);
  });

  test("이벤트 배지 산타 출력하기", () => {
    const handler = new PromotionHandler();
    const input = 20000;

    const result = handler.getBadge(input);
    const output = "산타";

    expect(result).toEqual(output);
  });

  test("이벤트 배지 트리 출력하기", () => {
    const handler = new PromotionHandler();
    const input = 10000;

    const result = handler.getBadge(input);
    const output = "트리";

    expect(result).toEqual(output);
  });

  test("이벤트 배지 별 출력하기", () => {
    const handler = new PromotionHandler();
    const input = 5000;

    const result = handler.getBadge(input);
    const output = "별";

    expect(result).toEqual(output);
  });

  test("이벤트 배지 없음 출력하기", () => {
    const handler = new PromotionHandler();
    const input = 0;

    const result = handler.getBadge(input);
    const output = "없음";

    expect(result).toEqual(output);
  });
});
