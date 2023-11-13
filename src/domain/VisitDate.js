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
      return this.#date;  
    }
    return null;
  }

  checkIsWeekend() {
    return DATE.WEEKEND.includes(this.#date);
  }

  checkStarDate() {
    return DATE.STAR.includes(this.#date);
  }
}

export default VisitDate;
