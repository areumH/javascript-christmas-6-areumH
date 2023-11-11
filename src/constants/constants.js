const MENU = [
  { name: "양송이수프", price: 6000, type: "APPETIZER" },
  { name: "타파스", price: 5500, type: "APPETIZER" },
  { name: "시저샐러드", price: 8000, type: "APPETIZER" },

  { name: "티본스테이크", price: 55000, type: "MAIN" },
  { name: "바비큐립", price: 54000, type: "MAIN" },
  { name: "해산물파스타", price: 35000, type: "MAIN" },
  { name: "크리스마스파스타", price: 25000, type: "MAIN" },

  { name: "초코케이크", price: 15000, type: "DESSERT" },
  { name: "아이스크림", price: 5000, type: "DESSERT" },

  { name: "제로콜라", price: 3000, type: "DRINK" },
  { name: "레드와인", price: 60000, type: "DRINK" },
  { name: "샴페인", price: 25000, type: "DRINK" },
];

const DATE = {
  MIN_RANGE: 1,
  MAX_RANGE: 31,
};

const ORDER = {
  MIN_RANGE: 1,
  MAX_RANGE: 20,
  GIFT_AMOUNT: 120000,
};

export { MENU, DATE, ORDER };
