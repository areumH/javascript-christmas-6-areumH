import VisitDate from "../src/domain/VisitDate.js";

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
