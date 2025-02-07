var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    Car.prototype.accelerate = function (amount) {
        this.speed += amount;
        console.log("".concat(this.brand, " ").concat(this.model, " accelerates to ").concat(this.speed, " km/h"));
    };
    Car.prototype.drive = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is driving..."));
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, model) {
        var _this = _super.call(this, brand, model) || this;
        _this.batteryLevel = 100;
        return _this;
    }
    ElectricCar.prototype.drive = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is driving silently with battery at ").concat(this.batteryLevel, "%"));
    };
    ElectricCar.prototype.charge = function () {
        this.batteryLevel = 100;
        console.log("".concat(this.brand, " ").concat(this.model, " is fully charged."));
    };
    return ElectricCar;
}(Car));
var myCar = new Car("Toyota", "Corolla");
myCar.accelerate(30);
myCar.drive();
console.log("Current Speed: ".concat(myCar.getSpeed(), " km/h"));
var myTesla = new ElectricCar("Tesla", "Model S");
myTesla.accelerate(50);
myTesla.drive();
myTesla.charge();
