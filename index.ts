class Car {
    protected brand: string;
    protected model: string;
    private speed: number;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    public accelerate(amount: number): void {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} accelerates to ${this.speed} km/h`);
    }

    public drive(): void {
        console.log(`${this.brand} ${this.model} is driving...`);
    }


    public getSpeed(): number {
        return this.speed;
    }
}

class ElectricCar extends Car {
    private batteryLevel: number;

    constructor(brand: string, model: string) {
        super(brand, model);
        this.batteryLevel = 100; 
    }

    public drive(): void {
        console.log(`${this.brand} ${this.model} is driving silently with battery at ${this.batteryLevel}%`);
    }


    public charge(): void {
        this.batteryLevel = 100;
        console.log(`${this.brand} ${this.model} is fully charged.`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.accelerate(30);
myCar.drive();
console.log(`Current Speed: ${myCar.getSpeed()} km/h`);

const myTesla = new ElectricCar("Tesla", "Model S");
myTesla.accelerate(50);
myTesla.drive(); 
myTesla.charge();
