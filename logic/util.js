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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();