const INPUT_MESSAGE = {
  WELCOME_MESSAGE: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  DATE_MESSAGE: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  ORDER_MESSAGE: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
};

const OUTPUT_MESSAGE = {
  EVENT_MESSAGE: "12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  MENU_LIST: "\n<주문 메뉴>",
};

const ERROR_MESSAGE = {
  INVALID_DATE: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  INVALID_ORDER: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };