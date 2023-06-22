const Taxi = function (manufacturer, model, driver) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.driver = driver;
    this.passengers = [];
}

Taxi.prototype.numberOfPassengers = function () {
    return this.passengers.length;
}

Taxi.prototype.addPassenger = function (passengerName) {
    this.passengers.push(passengerName);
}

Taxi.prototype.removePassengerByName = function (passengerName) {
    const index = this.passengers.indexOf(passengerName);
    if (index !== -1) {
        this.passengers.splice(index, 1);
    }
}

Taxi.prototype.removeAllPassengers = function () {
    this.passengers = [];
}

module.exports = Taxi;
