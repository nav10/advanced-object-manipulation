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

//convert the student object to a JSON string
const studentJSON = JSON.stringify(student);

//log the JSON string to the console
console.log("Student JSON String:", studentJSON);

//convert the JSON string back into a JavaScript object
const parsedStudent = JSON.parse(studentJSON);

//log new created object
console.log("Parsed Student Object:", parsedStudent);

//compare the parsed object with the original
console.log("Is parsed object same as the original?", JSON.stringify(parsedStudent) === JSON.stringify(student));