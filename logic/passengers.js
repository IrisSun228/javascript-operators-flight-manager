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
            'vipBuisness' : 0,
            'vipEconomy' : 0,
            'regBusiness' : 0,
            'regEconomy' : 0
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
            seatAssignments.vipBuisness = vipPassengers;
        } else {
            seatAssignments.vipBuisness = totalBS;
            seatAssignments.vipEconomy = vipPassengers - totalBS;
        }

        if (regPassengers <= totalBS - vipPassengers) {
            seatAssignments.regBusiness = regPassengers;
        } else if (vipPassengers <= totalBS) {
            seatAssignments.regBusiness = totalBS - vipPassengers;
            seatAssignments.regEconomy = regPassengers - (vipPassengers - totalBS)
        } else {
            seatAssignments.regEconomy = regPassengers;
        }

        return seatAssignments;
    }

    return {checkFlightCapacity};
}

module.exports = Passengers();