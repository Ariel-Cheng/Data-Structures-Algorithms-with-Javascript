//1.创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
function student(){
    this.grade = [];
    this.add = add;
    this.average = average;
}

function add(score){
     this.grade.push(score);
}

function average(){
    var total=0;
    for(var i = 0;i<this.grade.length;i++){
        total += this.grade[i];
    }
    console.log(total/this.grade.length); 
}

var aming = new student();
aming.add(10);
aming.add(107);
aming.add(107);
aming.average();
