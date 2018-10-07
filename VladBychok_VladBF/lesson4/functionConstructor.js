function Car(brand, fuelTank, ownerFullName) {
    const carBrand = brand;
    const carFuelTank = fuelTank;
    const carOwnerFullName = ownerFullName;
    this.getCarBrand = function () {
        console.log(carBrand);
    };
    this.getCarFuelTank = function () {
        console.log(carFuelTank);
    };
    this.getCarOwnerFullName = function () {
        console.log(carOwnerFullName);
    };
}
let detailsAboutCar = new Car("bmw", "2,5", "Bychok Vladislav");
detailsAboutCar.getCarBrand();
detailsAboutCar.getCarFuelTank();
detailsAboutCar.getCarOwnerFullName();
