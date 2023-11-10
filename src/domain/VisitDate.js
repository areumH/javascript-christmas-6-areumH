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

}

export default VisitDate;