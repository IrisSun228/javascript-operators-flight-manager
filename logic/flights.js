function Flights() {
    const calculateNumberOfFlights = (numOfPassengers, flightCapacity) => {
        if (numOfPassengers < 0 || !(Number.isInteger(numOfPassengers))) {
            throw new Error("The number of passengers must be a positive integer value");
        };

        if (flightCapacity < 0 || !(Number.isInteger(flightCapacity))) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }
        
        let numOfFlights = Math.floor(numOfPassengers / flightCapacity);

        if (numOfPassengers / flightCapacity !== numOfFlights) {
            numOfFlights++;
        };

        return numOfFlights;
    }

    return {calculateNumberOfFlights};
}

module.exports = Flights();