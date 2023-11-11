import { DATE } from "../constants/constants.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

import Validator from "../validators/Validator.js";

class VisitDate {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
  }

  #validate(date) {
    if (Validator.checkVisitDate(date)) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
  }

  checkChristmasDiscount() {
    if (this.#date <= DATE.CHRISTMAS) {   
      return this.#date;   // 리턴값: 날짜가 1~25인 경우 날짜 반환
    }
    return null;
  }

  checkIsWeekend() {
    return DATE.WEEKEND.includes(this.#date); // 리턴값: 주말=true 평일=false
  }

  checkStarDate() {
    return DATE.STAR.includes(this.#date); // 리턴값: 별표있는날짜=true 그외=false
  }
}

export default VisitDate;
