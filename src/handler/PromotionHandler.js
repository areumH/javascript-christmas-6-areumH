import { DISCOUNT } from "../constants/constants.js";
import { DISCOUNT_MESSAGE } from "../constants/messages.js";

class PromotionHandler {
  getChristmasDiscount(date) {
    // 크리스마스디데이
    const visitDate = date.checkChristmasDiscount();

    if (visitDate !== null) {
      return [
        DISCOUNT_MESSAGE.CHRISTMAS_MESSAGE,
        DISCOUNT.BASIC + (visitDate - 1) * DISCOUNT.INCREASE,
      ];
    }
    return null;
  }

  getWeekDiscount(order, date) {
    // 주말(메인) 평일(디저트)
    const weekendDiscount = order.getMainCount() * DISCOUNT.WEEK;
    const weekdayDiscount = order.getDessertCount() * DISCOUNT.WEEK;

    if (date.checkIsWeekend()) {
      return weekendDiscount !== 0
        ? [DISCOUNT_MESSAGE.WEEKEND_MESSAGE, weekendDiscount]
        : null;
    }
    return weekdayDiscount !== 0
      ? [DISCOUNT_MESSAGE.WEEKEND_MESSAGE, weekdayDiscount]
      : null;
  }

  getStarDiscount(date) {
    // 별표날짜
    if (date.checkStarDate()) {
      return [DISCOUNT_MESSAGE.STAR_MESSAGE, DISCOUNT.STAR];
    }
    return null;
  }

  getGiftDiscount(order) {
    // 샴페인증정
    if (order.getTotalAmount() >= DISCOUNT.GIFT) {
      return [DISCOUNT_MESSAGE.GIFT_MESSAGE, DISCOUNT.GIFT];
    }
    return null;
  }
}

export default PromotionHandler;
