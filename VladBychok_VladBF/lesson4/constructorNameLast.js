function Car(brand, fuelTank, ownerFullName) {
    const carBrand = brand;
    const carFuelTank = fuelTank;
    const carOwnerFullName = ownerFullName;
    const defaultName = 'John Doe';

    this.getCarBrand = function () {
        console.log(carBrand);
    };
    this.getCarFuelTank = function () {
        console.log(carFuelTank);
    };
    this.getCarOwnerFullName = function () {
        if (carOwnerFullName) {
            console.log(carOwnerFullName);
        } else {
            console.log(defaultName);
        }
    };
    this.getFirstNamePart = function () {
        const partsName = carOwnerFullName.split(' ');
        console.log(partsName[0]);
    };
    this.getSecondNamePart = function () {
        const partsName = carOwnerFullName.split(' ');
        console.log(partsName[1]);
    };
}
let aboutCar = new Car("bmw", "2,5", "Bychok Vladislav");
aboutCar.getCarBrand();
aboutCar.getCarFuelTank();
aboutCar.getCarOwnerFullName();
aboutCar.getFirstNamePart();
aboutCar.getSecondNamePart();