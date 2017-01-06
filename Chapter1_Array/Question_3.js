//3.修改本章前面出现过的weeklyTemps 对象，使它可以使用一个二维数组来存储每月的有用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
function weekTemps() {
    this.dataScore = [];
    this.add = add;
    this.weekAverage = weekAverage;
    this.monthAverage = monthAverage;
}

function add(arr) {
    this.dataScore.push(arr);
}

function weekAverage() {
    var total = 0;
    for (var i = 0; i < this.dataScore.length; i++) {
        for (var j = 0; j < this.dataScore[i].length; j++) {
            total += this.dataScore[i][j];
        }
        console.log("周平均气温： " + (total / this.dataScore[i].length).toFixed(2));
        total = 0;
    }
}

function monthAverage() {
    var total = 0;
    var num = 0;
    for (var i = 0; i < this.dataScore.length; i++) {
        for (var j = 0; j < this.dataScore[i].length; j++) {
            total += this.dataScore[i][j];
            num++;
        }
    }
    console.log("月平均气温： " + (total / num).toFixed(2));
}

var thisWeek = new weekTemps();
thisWeek.add([23, 12, 23, 34, 12, 14, 12]);
thisWeek.add([3, 7, 12, 65, 43, 14, 32]);
thisWeek.add([54, 1, 65, 23, 23, 5, 34]);
thisWeek.add([23, 12, 23, 34, 12, 14, 12]);
thisWeek.weekAverage();
thisWeek.monthAverage();