
var student= new Object();
student.name="M Ali";
student["No of Students"]=10;

console.log(student);
console.log(student.name);


student.bstudent = new Object();
student.bstudent.firstname= "Pasha";
// OR by Second Way
student["BStudent FirstName"] = "Nauman";
console.log(student.bstudent);
