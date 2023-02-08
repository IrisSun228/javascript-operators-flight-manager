function Util() {
    const calculateTotalDistributedPassengers = (seatAssignments) => {
        return seatAssignments.vipPassengersWithBusinessSeats + 
               seatAssignments.vipPassengersWithEconomySeats +
               seatAssignments.regularPassengersWithBusinessSeats +
               seatAssignments.regularPassengersWithEconomySeats;
    }

    const calculateTotalNumberOfPassengers = (passengersNumbersArray) => {
        return passengersNumbersArray.reduce((a, b) => {return a + b});
    }

    const checkInput = (input) => {
        if (!input || !isNan(input)) {
            throw new Error();
        }
    }

    const calculateTotalDistance = (distancesArray) => {
        return distancesArray.reduce((a, b) => {return b > 0 ? a + b : a}, 0);
    }

    const calculateBonusPoints = (businessDistancesArray, economyDistancesArray, businessBonus, economyBonus) => {
        return businessBonus / 100 * calculateTotalDistance(businessDistancesArray) + economyBonus / 100 * calculateTotalDistance(economyDistancesArray);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();