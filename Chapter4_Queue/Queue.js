function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}
// 测试程序  
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

//病人对象
function Patient(name, code) {
	this.name = name;
	this.code = code;
}

function dequeue() {
	var priority = this.dataStore[0].code;
	var des = 0;
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i].code < priority) {
			priority = this.dataStore[i].code;
			des = i;
		}
	}
	return this.dataStore.splice(des, 1);
}

function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; i++) {
		retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
	}
	return retStr;
}
var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString()); // 下一轮 
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

function dequeue() {
	var priority = this.dataStore[0].code;
	var des = 0;
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i].code > priority) {
			priority = this.dataStore[i].code;
			des = i;
		}
	}
	return this.dataStore.splice(des, 1);
}
//test
var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString()); // 下一轮 
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

//入队，排号
//患者就诊，叫号
//显示当前等候名单

//1、button在webkit浏览器下会提交表单，即刷新页面，而input type=button则不会ishuxin页面
//2、textearea读取文本值是可以用name和id，而写入文本值得时候只能用id，.val(text)或者.text(text)

$(function() {
	var liu = new Queue();
	$('#signIn').click(function() {
		var name = $.trim($("#name").val());
		var priority = $.trim($("#priority").val());
		if (name == "" || priority == "") {
			//alert('请输入必要信息');
		} else {
			var people = new Patient(name, priority);
			liu.enqueue(people);
		}
	});

	$("#call").click(function() {
		if(!liu.empty()){
		var a = liu.dequeue();
		var text = a[0].name + ",please come in."
		$("#content").val(text);
			
		}else{
			alert('当前无人等候就诊')
		}
	});

	$("#show").click(function() {
		if(!liu.empty()){
		var text = liu.toString();
		$("#detail").val(text);
			
		}else{
			alert('当前无人等候就诊')；
		}
	});
});