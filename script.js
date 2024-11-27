//creating a student object
const student = {
    name: "Navi",
    age: 28,
    enrolled: true,
    courses: ["Fundamentals of JavaScript", "Web Programming and Design", "Database Concepts"],

    //method to display basic student information
    displayInfo() {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};

//output the name and age properties
console.log("Name:", student.name);
console.log("Age:", student.age);

//call the displayInfo method and log the result
console.log("Student Info:", student.displayInfo());