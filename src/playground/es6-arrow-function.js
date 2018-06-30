function square(x) {
    return x * x;
}

// const squArrow = x => {
//     return x * x;
// };

const squArrow = x => x * x;

console.log(squArrow(8));
console.log(square(3));

const getFirstNameShort = fullName => fullName.split(" ")[0];

const getFirstName = fullName => {
    if (fullName) {
        return fullName.split(" ")[0];
    }
};

console.log(getFirstNameShort("Topher Sikorra"));
console.log(getFirstName("Toph Sikorra"));
