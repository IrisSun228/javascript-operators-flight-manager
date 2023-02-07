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

    const checkAircraftRevision = (distanceLimit, distancesArray) => {
        let totalDistance = distancesArray.reduce((a, b) => {return a + b})

        if (totalDistance <= distanceLimit / 2) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance <= distanceLimit * 3 / 4) {
            return "The revision needs to be done within the next 2 months";
        } else if (totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month";
        } else {
            throw new Error();
        };
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();