function Passengers() {
    const checkFlightCapacity = (flightCapacity, passengersNumbersArray) => {
        let totalPassengers = passengersNumbersArray.reduce((a, b) => {return a + b});

        if (totalPassengers < flightCapacity) {
            return totalPassengers;
        } else {
            throw new Error();
        }
    }

    const distributeAllSeatsToAllPassengers = (vipPassengers, regPassengers, flights, businessSeats, economySeats) => {
        let seatAssignments = {
            'vipPassengersWithBusinessSeats' : 0,
            'vipPassengersWithEconomySeats' : 0,
            'regularPassengersWithBusinessSeats' : 0,
            'regularPassengersWithEconomySeats' : 0
        }

        //Adjust  total passengers <= total seats
        const totalBS = businessSeats * flights;
        const totalSeats = totalBS + economySeats * flights;

        if (vipPassengers > totalSeats) {
            vipPassengers = totalSeats;
            regPassengers = 0;
        } else if (vipPassengers + regPassengers > totalSeats) {
            regPassengers = totalSeats - vipPassengers;
        }

        //Assigning seats to passengers
        if (vipPassengers <= totalBS) {
            seatAssignments.vipPassengersWithBusinessSeats = vipPassengers;
        } else {
            seatAssignments.vipPassengersWithBusinessSeats = totalBS;
            seatAssignments.vipPassengersWithEconomySeats = vipPassengers - totalBS;
        }

        if (regPassengers <= totalBS - vipPassengers) {
            seatAssignments.regularPassengersWithBusinessSeats = regPassengers;
        } else if (vipPassengers <= totalBS) {
            seatAssignments.regularPassengersWithBusinessSeats = totalBS - vipPassengers;
            seatAssignments.regularPassengersWithEconomySeats = regPassengers - (vipPassengers - totalBS)
        } else {
            seatAssignments.regularPassengersWithEconomySeats = regPassengers;
        }

        return seatAssignments;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();