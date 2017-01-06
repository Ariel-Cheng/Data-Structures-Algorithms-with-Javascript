//字典就是一键值形式存储数据的数据结构
//js中的对象就是
function Dictionary() {
	this.dataStore = new Array();
	this.find = find;
	this.remove = remove;
	this.add = add;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}

function showAll() {
	//Object.keys返回一个数组，最好不要最数组使用for-in遍历~
	var temp = Object.keys(this.dataStore).sort();
	for (var i = 0; i < temp.length; i++) {
		console.log(temp[i] + " -> " +
			this.dataStore[temp[i]]);
	}
}
var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
console.log("David's extension: " + pbook.find("Mike"));
pbook.showAll();


//当键的类型为字符串时，length属性就不管用了
function count() {
	var n = 0;
	for (var key in Object.keys(this.dataStore)) {
		n++;
	}
	return n;
}

function clear() {
	for (var key in Object.keys(this.dataStore)) {
		delete this.dataStore[key];
	}
}

//7.4.2
var text = "the brown fox jumped over the blue fox";
var arr = text.split(' ');
var words = new Dictionary();
var value = 1;
for (var i = 0; i < arr.length; i++) {
	if (words.find(arr[i])) {
		value++;
	}
	words.add(arr[i], value);
}
words.showAll();