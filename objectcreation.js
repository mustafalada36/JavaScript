
var student= new Object();
student.name="M Ali";
student["No of Students"]=10;

console.log(student);
console.log(student.name);


student.bstudent = new Object();
student.bstudent.firstname= "Pasha";
console.log(student.bstudent);
// OR by Second Way
var BStudentFirstName = "Nauman";
var BStudent;
student[BStudent] = 10;
console.log("B Students are:"+student[BStudent]);

//Third way

var BStudentLastName = "Ali";
var WStudent;
student[WStudent] = 2;
console.log("W Students are:" +student[WStudent]);
