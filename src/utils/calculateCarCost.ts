function calculateDailyCarRentalCost(
  fixedFee: number,
  builtYear: number,
  milesPerGallon: number
): number {
  // Calculate the depreciation based on the car's age
  const currentYear = new Date().getFullYear();
  const carAge = currentYear - builtYear;
  const depreciationRate = 0.1; // You can adjust this rate based on your needs
  const depreciationCost = depreciationRate * carAge * fixedFee;

  // Calculate the fuel cost based on the assumed miles driven per day
  const milesPerDay = 100; // You can adjust this based on the expected usage
  const fuelCost = milesPerDay / milesPerGallon;

  // Calculate the total daily cost
  const dailyCost = fixedFee + depreciationCost + fuelCost;

  return dailyCost;
}
export default calculateDailyCarRentalCost;
