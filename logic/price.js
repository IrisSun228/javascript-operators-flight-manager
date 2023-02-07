function Prices() {
    const calculateFinalPrice = (basePrice, passengerTypeVariation, flightTypeVariation) => {
        return basePrice * (1 + passengerTypeVariation / 100) * (1 + flightTypeVariation / 100);
    }

    return {calculateFinalPrice};
}

module.exports = Prices();