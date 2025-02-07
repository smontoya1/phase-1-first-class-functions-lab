const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function (fare) {
        return multiplier * fare
    };
}

const fareDoubler = function (fare) {
    const doubleFare = createFareMultiplier (2);
    return doubleFare(fare);
}

const fareTripler = function (fare) {
    const tripleFare = createFareMultiplier (3);
    return tripleFare (fare);
}

function selectDifferentDrivers (drivers, driverFunction) {
    return driverFunction(drivers);
}