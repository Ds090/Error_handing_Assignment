// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.

class Car {
    Company;
    model;
    year;

    constructor(c,m,y){
        this.Company = c;
        this.model = m;
        this.year = y;
    }

    getDescripition(){
        console.log(`This is a ${this.year} ${this.Company} ${this.model}`);
    }
    
}

const myCar = new Car("Skoda","Rapid",2022);

// myCar.Company = "Skoda";
// myCar.model = "Rapid";
// myCar.year = 2022;

myCar.getDescripition();