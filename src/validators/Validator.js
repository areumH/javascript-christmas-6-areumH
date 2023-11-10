const Validator = {
  // *** 방문 날짜 확인
  checkVisitDate(date) {
    return isNaN(date) || date < 1 || date > 31;
  },

};

export default Validator;
