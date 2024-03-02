
let gender = prompt("Enter your gender (male/female):");


if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Invalid gender input. Please enter either 'male' or 'female'.");
}
