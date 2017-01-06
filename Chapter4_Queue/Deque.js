function Deque() {
	this.dataStore = [];
	this.push_back = push_back;
	this.push_front = push_front;
	this.pop_back = pop_back;
	this.pop_front = pop_front;
	this.front = front;
	this.back = back;
	this.empty = empty;
	this.toString = toString;
}

function push_back(element) {
	this.dataStore.push(element);
}

function push_front(element) {
	this.dataStore.unshift(element);
}

function pop_back() {
	return this.dataStore.pop();
}

function pop_front() {
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
var q = new Deque();
q.push_back("Meredith");
q.push_front("Cynthia");
q.push_back("Jennifer");
console.log(q.toString());
q.pop_back();
console.log(q.toString());
q.pop_front();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

function isPalindrome(word) {
	var d = new Deque();
	for (i = 0; i < word.length; i++) {
		d.push_back(word[i]);
	}
	var rword = "";
	while (d.dataStore.length > 0) {
		rword += d.pop_back();
	}
	if (word == rword) {
		return true;
	} else {
		return false;
	}
}

var word = "hello";
if (isPalindrome(word)) {
	console.log(word + " is a palindrome.");
} else {
	console.log(word + " is not a palindrome.");
}
word = "racecar";
if (isPalindrome(word)) {
	console.log(word + " is a palindrome.");
} else {
	console.log(word + " is not a palindrome.");
}