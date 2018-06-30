const add = function(a, b) {
    return a + b;
};

console.log(add(55, 1, 2000));

const user = {
    name: "Topher",
    cities: ["DC", "Arlington", "Clearwater"],
    printPlacesLived() {
        // this.cities.forEach(city => {
        //     console.log(this.name + " has lived in " + city);
        // });
        return this.cities.map(
            city => this.name + " has lived in " + city + "!"
        );
    }
};

console.log(user.printPlacesLived());

// challeng area
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
