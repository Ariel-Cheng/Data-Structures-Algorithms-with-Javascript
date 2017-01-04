//4.创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
function combine(){
    this.lists=["a","p","p","l","e"];
    this.merge = merge;
}

function merge(){
   console.log(this.lists.join(""));
}

var apple = new combine();
apple.merge();