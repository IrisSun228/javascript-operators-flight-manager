function Util() {
    const calculateTotalDistributedPassengers = (seatAssignments) => {
        return seatAssignments.vipPassengersWithBusinessSeats + 
               seatAssignments.vipPassengersWithEconomySeats +
               seatAssignments.regularPassengersWithBusinessSeats +
               seatAssignments.regularPassengersWithEconomySeats;
    }

    return {calculateTotalDistributedPassengers}
}

module.exports = Util();