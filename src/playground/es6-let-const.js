let nameLet = "Topher";
const nameConst = "Frank";

var nameVar = "Toph";
nameLet = "Jamie";
console.log("nameLet", nameLet);

function getPetName() {
    var petName = "Hal";

    return petName;
}

const petName = getPetName();
console.log(petName);

let fullName = "Topher Sikorra";


let firstName;
if (fullName) {
    var firstName = fullName.split(" ")[0];
    let lastName = fullName.split(" ")[1];
    const allOfIt = fullName;
}

// let and const are block-scoped
// var is function-scoped
console.log(firstName);

