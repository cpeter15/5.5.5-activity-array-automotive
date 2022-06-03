

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (num + this.passenger > this.maximumPassengers) {
            console.log("there is not enough room to fit these passengers")
        } else {
            this.passenger = num;
        }
    }

    start() {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            this.started = false;
        }
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true;
        }
        else {
            this.scheduleService = false;
        }
        return this.scheduleService
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
