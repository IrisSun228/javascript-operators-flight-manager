function Passengers() {
    const checkFlightCapacity = (flightCapacity, passengersNumbersArray) => {
        let totalPassengers = passengersNumbersArray.reduce((a, b) => {return a + b});

        if (totalPassengers < flightCapacity) {
            return totalPassengers;
        } else {
            throw new Error();
        }
    }

    return {checkFlightCapacity};
}

module.exports = Passengers();