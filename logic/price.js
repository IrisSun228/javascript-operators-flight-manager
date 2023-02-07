function Prices() {
    const calculateFinalPrice = (basePrice, passengerTypeVariation, flightTypeVariation) => {
        let finalPrice =  basePrice * (1 + passengerTypeVariation / 100) * (1 + flightTypeVariation / 100);

        return finalPrice.toFixed(2);
    }

    return {calculateFinalPrice};
}

module.exports = Prices();