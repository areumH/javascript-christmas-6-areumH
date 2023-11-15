import VisitDate from "../src/domain/VisitDate.js";
import OrderMenu from "../src/domain/OrderMenu.js";

describe("방문 날짜 테스트", () => {
  test.each([1, 2, 8, 9, 15, 16, 22, 23, 29, 30])("주말 확인하기", (inputs) => {
    const date = new VisitDate(inputs);

    const result = date.checkIsWeekend();
    const output = true;

    expect(result).toEqual(output);
  });

  test.each([
    3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
    31,
  ])("평일 확인하기", (inputs) => {
    const date = new VisitDate(inputs);

    const result = date.checkIsWeekend();
    const output = false;

    expect(result).toEqual(output);
  });

  test.each([3, 10, 17, 24, 25, 31])("특별 할인 날짜 확인하기", (inputs) => {
    const date = new VisitDate(inputs);

    const result = date.checkStarDate();
    const output = true;

    expect(result).toEqual(output);
  });
});

describe("주문 메뉴 테스트", () => {
  test("할인 전 총주문 금액 확인하기", () => {
    const input = [
      ["타파스", "티본스테이크", "초코케이크", "제로콜라"],
      [2, 1, 1, 3],
    ];
    const order = new OrderMenu(input);

    const result = order.getTotalAmount();
    const output = 90000;

    expect(result).toEqual(output);
  });

  test("메인 메뉴 개수 확인하기", () => {
    const input = [
      ["양송이수프", "티본스테이크", "바비큐립", "해산물파스타", "샴페인"],
      [2, 1, 2, 1, 1],
    ];
    const order = new OrderMenu(input);

    const result = order.getMainCount();
    const output = 4;

    expect(result).toEqual(output);
  });

  test("디저트 메뉴 개수 확인하기", () => {
    const input = [
      ["시저샐러드", "티본스테이크", "초코케이크", "아이스크림"],
      [2, 1, 1, 3],
    ];
    const order = new OrderMenu(input);

    const result = order.getDessertCount();
    const output = 4;

    expect(result).toEqual(output);
  });
});
