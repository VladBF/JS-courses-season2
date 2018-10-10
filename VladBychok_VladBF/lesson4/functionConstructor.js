function Car(brand, fuelTank, ownerFullName) {
  const carBrand = brand;
  const carFuelTank = fuelTank;
  const carOwnerFullName = ownerFullName;
  this.getCarBrand = function () {
    return carBrand;
  };
  this.getCarFuelTank = function () {
    return carFuelTank;
  };
  this.getCarOwnerFullName = function () {
    return carOwnerFullName;
  };
}
let detailsAboutCar = new Car("bmw", "2,5", "Bychok Vladislav");
console.log(detailsAboutCar.getCarBrand());
console.log(detailsAboutCar.getCarFuelTank());
console.log(detailsAboutCar.getCarOwnerFullName());
