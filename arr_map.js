const numbers = [1, 2, 3];
const doubled = numbers.map((item) => item * 2);

console.log(doubled);

var students = [
  { id: 1, name: "John", course: "Pyhton" },
  { id: 1, name: "Jack", course: "Java" },
  { id: 1, name: "Jones", course: "React" },
];

var studentNames = students.map((student) => {
  return student.name;
});

console.log(studentNames);
