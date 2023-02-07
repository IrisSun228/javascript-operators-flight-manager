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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};
}

module.exports = Util();