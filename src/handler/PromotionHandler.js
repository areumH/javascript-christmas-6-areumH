import { ORDER, DISCOUNT, BADGE } from "../constants/constants.js";
import { DISCOUNT_MESSAGE } from "../constants/messages.js";

class PromotionHandler {
  checkLessThanMin(order) {
    return order.getTotalAmount() < DISCOUNT.MINIMUM;
  }

  getChristmasDiscount(date) {
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
    const weekendDiscount = order.getMainCount() * DISCOUNT.WEEK;
    const weekdayDiscount = order.getDessertCount() * DISCOUNT.WEEK;

    if (date.checkIsWeekend()) {
      return weekendDiscount !== 0
        ? [DISCOUNT_MESSAGE.WEEKEND_MESSAGE, weekendDiscount]
        : null;
    }
    return weekdayDiscount !== 0
      ? [DISCOUNT_MESSAGE.WEEKDAY_MESSAGE, weekdayDiscount]
      : null;
  }

  getStarDiscount(date) {
    if (date.checkStarDate()) {
      return [DISCOUNT_MESSAGE.STAR_MESSAGE, DISCOUNT.STAR];
    }
    return null;
  }

  getGiftDiscount(order) {
    if (order.getTotalAmount() >= ORDER.GIFT_AMOUNT) {
      return [DISCOUNT_MESSAGE.GIFT_MESSAGE, DISCOUNT.GIFT];
    }
    return null;
  }

  getTotalDiscount(array) {
    if (array === null) return 0;

    const discountArray = array.filter((el) => el !== null);
    return discountArray.reduce((total, arr) => total + arr[1], 0);
  }

  getBadge(discount) {
    if (discount >= ORDER.SANTA) return BADGE.SANTA;
    if (discount >= ORDER.TREE) return BADGE.TREE;
    if (discount >= ORDER.STAR) return BADGE.STAR;
    return DISCOUNT_MESSAGE.NONE;
  }
}

export default PromotionHandler;
