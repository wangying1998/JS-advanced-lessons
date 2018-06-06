function Student(name,sno,age){
    this.name = name;
    this.sno = sno;
    this.age = age;
};
Student.prototype.show = function(){
    console.log("My name is "+this.name+",my sno is "+this.sno+",I'm "+this.age+" years old.");
}
module.exports = Student;
