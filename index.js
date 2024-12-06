const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return (fare) => fare * num
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arr, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr)
    } else {
        return returnLastTwoDrivers(arr)
    }
}




































// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// const returnFirstTwoDrivers = function () {
//     return drivers.slice(0, 2)
// }

// const returnLastTwoDrivers = function () {
//     return drivers.slice(-2)
// }

// let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier (multiplier) {
//     let fareMultiplier = function (fare) {
//         return fare * multiplier;
//     }
//     return fareMultiplier
// }

// const fareDoubler = function (fare) {
//     return fare * 2;
// }

// const fareTripler = function (fare) {
//     return fare * 3;
// }

// function selectDifferentDrivers (drivers, func) {
//     if (func === returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers(drivers);
//     } else if (func === returnLastTwoDrivers) {
//         return returnLastTwoDrivers(drivers);
//     }
// }