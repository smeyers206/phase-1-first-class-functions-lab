const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (x) {
  return function (fare) {
    return fare * x;
  };
};

const fareDoubler = function (fare) {
  return fare * 2;
};

const fareTripler = function (fare) {
  return fare * 3;
};

const fareQuadrupler = function (fare) {
  return fare * 4;
};

const fareQuintupler = function (fare) {
  return fare * 5;
};

const selectDifferentDrivers = function (arrayOfDrivers, returningDrivers) {
  switch (returningDrivers) {
    case (returningDrivers = returnFirstTwoDrivers):
      return arrayOfDrivers.slice(0, 2);
    case (returningDrivers = returnLastTwoDrivers):
      return arrayOfDrivers.slice(2);
  }
};
