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

//destructure the name and courses properties from the student object
const { name, courses } = student;

//log the extracted properties
console.log("Extracted Name:", name);
console.log("Extracted Courses:", courses);

//create array of scores
const scores = [82, 78, 65, 92];

//destructure the first two scores from the array
const [firstScore, secondScore] = scores;

//log first two scores to the console
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

//clone student object using the spread operator
const clonedStudent = { ...student };

//add new property to the cloned object
clonedStudent.graduationYear = 2026;

//log the updated cloned object
console.log("Cloned Student with New Property:", clonedStudent);

//new array of courses to merge
const newCourses = ["Algorithms", "Operating Systems"];

//merge arrays using the spread operator
const allCourses = [...student.courses, ...newCourses];

//log merged array
console.log("Merged Courses Array:", allCourses);

//method to dynamically add a new course
student.addCourse = function (newCourse) {
    this.courses.push(newCourse);
    console.log(`Course "${newCourse}" added successfully.`);
};

//testing new method
student.addCourse("Advanced Front End Programming");

//log the updated courses array
console.log("Updated Courses Array:", student.courses);