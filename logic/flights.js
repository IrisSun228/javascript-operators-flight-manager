function Flights() {
    const calculateNumberOfFlights = (numOfPassengers, flightCapacity) => {
        let numOfFlights = Math.floor(numOfPassengers / flightCapacity);

        if (numOfPassengers / flightCapacity !== numOfFlights) {
            numOfFlights++;
        };

        return numOfFlights;
    }

    return {calculateNumberOfFlights};
}

module.exports = Flights();