function Car(brand, fuelTank, ownerFullName) {
  const carBrand = brand;
  const carFuelTank = fuelTank;
  const carOwnerFullName = ownerFullName;
  const defaultName = 'John Doe';

  this.getCarBrand = function () {
    return carBrand;
  };
  this.getCarFuelTank = function () {
    return carFuelTank;
  };
  this.getCarOwnerFullName = function () {
    if (carOwnerFullName) {
      return carOwnerFullName;
    } else {
      return defaultName;
    }
  };
  this.getFirstNamePart = function () {
    const partsName = carOwnerFullName.split(' ');

    return partsName[0];
  };
  this.getSecondNamePart = function () {
    const partsName = carOwnerFullName.split(' ');
    return partsName[1];
  };
}
let aboutCar = new Car("bmw", "2,5", "Bychok Vladislav");
console.log(aboutCar.getCarBrand());
console.log(aboutCar.getCarFuelTank());
console.log(aboutCar.getCarOwnerFullName());
console.log(aboutCar.getFirstNamePart());
console.log(aboutCar.getSecondNamePart());