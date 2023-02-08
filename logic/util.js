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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance};
}

module.exports = Util();