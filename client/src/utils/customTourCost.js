import { vehiclePrice, accomodationPrices } from '../data/prices';

const customTourCost = (
  customTour,
  distanceData,
  vehicleType,
  passengerCount
) => {
  if (customTour.length === 0) {
    return 0;
  }

  let totalDistance = 0;
  let totalCost = 0;
  const cities = customTour.map((loc) => loc.city);
  const accomodations = customTour.map((loc) => loc.accomodation);
  const length = cities.length;

  for (let i = 0; i < length - 1; i++) {
    const city = cities[i];
    // console.log(distanceData[city].distances[cities[i + 1]]);
    totalDistance += distanceData[city].distances[cities[i + 1]];
  }

  const distanceTotalPrice = totalDistance * vehiclePrice[vehicleType]; // for all passengers
  let accomodationTotalPrice = 0; //for single person

  accomodations.forEach((acc, i) => {
    if (acc === null) {
      accomodationTotalPrice += 0;
    } else {
      accomodationTotalPrice += accomodationPrices[accomodations[i]];
      console.log({
        'accomodationPrices[accomodations[i]]':
          accomodationPrices[accomodations[i]],
      });
    }
  });

  console.log({ accomodations, accomodationTotalPrice });

  const accomodationAllPassengersPrice =
    accomodationTotalPrice * passengerCount;

  totalCost = distanceTotalPrice + accomodationAllPassengersPrice;

  return {
    distanceTotalPrice,
    singlePersonAccomodationPrice: accomodationTotalPrice,
    accomodationAllPassengersPrice,
    totalCost,
    totalDistance,
  };
};

export default customTourCost;
