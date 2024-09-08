// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


function calcBMI(mass, height) {
    BMI = mass / (height * height);
    return BMI;
}
BMI_John = calcBMI(78, 1.69);
BMI_Mark = calcBMI(92, 1.95);

function checkBMI(BMI_John, BMI_Mark) {
    if (BMI_John > BMI_Mark) {
        console.log("John's BMI" + BMI_John + " is higher than Mark's" + BMI_Mark);
    } else if (BMI_John < BMI_Mark) {
        console.log("Mark's BMI" + BMI_Mark + " is higher than John's" + BMI_John);
    } else
        console.log("Mark's BMI" + BMI_Mark + "=" + BMI_John);

}

checkBMI(BMI_John, BMI_Mark);