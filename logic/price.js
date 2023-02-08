function Prices() {
    const calculateFinalPrice = (basePrice, passengerTypeVariation, flightTypeVariation) => {
        let finalPrice =  basePrice * (1 + passengerTypeVariation / 100) * (1 + flightTypeVariation / 100);

        return finalPrice.toFixed(2);
    }

    const calculateDefaultFinalPrice = (basePrice, passengerType, flightType) => {
        let passengerTypeVariation, flightTypeVariation;

        passengerType.toLowerCase();
        flightType.toLowerCase();

        if (passengerType === "regular") {
            passengerTypeVariation = -5;
        } else if (passengerType === "vip") {
            passengerTypeVariation = 5;
        }

        if (flightType === "economy") {
            flightTypeVariation = -3;
        } else if (flightType === "business") {
            flightTypeVariation = 10;
        }

        return calculateFinalPrice(basePrice, passengerTypeVariation, flightTypeVariation);
    }

    const calculateTotalFinalPrice = (seats, passengerType, flightType, basePrice) => {
        return seats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();