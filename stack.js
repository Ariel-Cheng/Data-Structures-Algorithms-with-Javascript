function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.length = length;
	this.peek = peek;
	this.pop = pop;
	this.push = push;
	this.clear = clear;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function length() {
	return this.top;
}

function clear() {
	return this.top = 0;
}

var s = new Stack();
s.push('David');
s.push('Ramymond');
s.push('Bryan');

console.log("length " + s.length());
console.log(s.peek());

var popped = s.pop();

console.log("This popped element is " + popped);
console.log(s.peek());

s.push("Cynthia");
console.log(s.peek());

s.clear();
console.log("length " + s.length());

function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num / base);
	} while (num > 0);

	var convert = "";
	while (s.length() > 0) {
		convert += s.pop();
	}

	return convert;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

function isPalindrome(word) {
	var s = new Stack();

	for (var i = 0; i < word.length; i++) {
		s.push(word[i]);
	}

	var rword = "";
	while (s.length() > 0) {
		rword += s.pop();
	}

	if (word == rword) {
		return true;
	} else {
		return false;
	}
}

var word = "hello";
if (isPalindrome(word)) {
	console.log(word + " is a palindrome .");
} else {
	console.log(word + " is not a palindrome . ")
}

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(5));

function factorial1(n) {
	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;

}

console.log(factorial1(5));

function isMatch(str) {
	var s = new Stack(),
		length = str.length;
	var i = 0;
	while (i < length) {
		//左括号入栈 var bracket = "([{"; if(bracket.indexOf(str[i]) !="-1")
		if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
			s.push(str[i]);
		}

		//右括号匹配，或者缺少左括号
		switch (str[i]) {
			case ")":
				if (s.length() && s.dataStore[s.length() - 1] == "(") {
					s.pop();
				} else {
					console.log("缺少与括号 " + str[i] + " 匹配的左括号，位置为 " + i);
				}
				break;
			case "]":
				if (s.length() && s.dataStore[s.length() - 1] == "[") {
					s.pop();
				} else {
					console.log("缺少与括号 " + str[i] + " 匹配的左括号，位置为 " + i);
				}
				break;
			case "}":
				if (s.length() && s.dataStore[s.length() - 1] == "{") {
					s.pop();
				} else {
					console.log("缺少与括号 " + str[i] + " 匹配的左括号，位置为 " + i);
				}
				break;
			default:
				;

		}
		i++;
	}

	//缺少很多右括号
	while (s.length() > 0) {
		console.log("缺少与括号" + s.pop() + "匹配的右括号，位置为" + i);
		i++;
	}
}

isMatch("2.3+23/12 +{[(3.14159*0.24)+(2.1+1]");

/**
 * 计算逆波兰表达式的值
 ["6", "5", "2", "3", "+", "8", "*", "+", "3", "+", "*"]));
 */
function calculate(RPolishArray) {
	var result = 0;
	var tempArray = new Stack();
	var tempNum = -1;
	var operator = "+-*/";
	for (i = 0; i < RPolishArray.length; i++) {
		if (operator.indexOf(RPolishArray[i]) < 0) {
			tempNum++;
			tempArray.push(RPolishArray[i]);
		} else {
			switch (RPolishArray[i]) {
				case '+':
					result = parseFloat(tempArray.dataStore[tempNum - 1]) + parseFloat(tempArray.dataStore[tempNum]);
					tempNum--;
					tempArray.pop();
					tempArray.dataStore[tempNum] = result;
					break;
				case '-':
					result = parseFloat(tempArray.dataStore[tempNum - 1]) - parseFloat(tempArray.dataStore[tempNum]);
					tempNum--;
					tempArray.pop();
					tempArray.dataStore[tempNum] = result;
					break;
				case '*':
					result = parseFloat(tempArray.dataStore[tempNum - 1]) * parseFloat(tempArray.dataStore[tempNum]);
					tempNum--;
					tempArray.pop();
					tempArray.dataStore[tempNum] = result;
					break;
				case '/':
					result = parseFloat(tempArray.dataStore[tempNum - 1]) / parseFloat(tempArray.dataStore[tempNum]);
					tempNum--;
					tempArray.pop();
					tempArray.dataStore[tempNum] = result;
					break;
			}
		}
	}
	result = tempArray.dataStore[tempNum];
	return result;
}

/**
* 把普通算术表达式转换为逆波兰表达式
http://huangyuanmu.iteye.com/blog/435938
*/
//操作符优先级低，入栈，高弹出，（只有在）时才会弹出
function toRPolish(input) {

	var RPolish = "";
	var symbol = new Stack();
	var operator = "+-*/";
	//是操作符吗
	var isI = true;

	for (var i = 0; i < input.length; i++) {
		var c = input.charAt(i);
		if (c == "(") {
			symbol.push(c);
			isI = true;
		} else if (c == ")") {
			while (symbol.length() != 0 && symbol.peek() != "(") {

				RPolish += ",";
				RPolish += symbol.peek();
				symbol.pop();
			}
			symbol.pop();
			isI = true;
		} else if (operator.indexOf(c) < 0) {
			if (RPolish != "" && isI == true) {
				RPolish += ",";
			}
			RPolish += c;
			isI = false;
		} else {
			while (symbol.top != 0 && precedence(symbol.peek(), c) >= 0) {

				RPolish += ",";
				RPolish += symbol.peek();
				symbol.pop();
			}
			symbol.push(c);
			isI = true;
		}
	}
	while (symbol.top != 0) {
		RPolish += ",";
		RPolish += symbol.peek();
		symbol.top--;

	}

	// RPolish = RPolish.replace(/\d+(\(|\)|\+|\-|\*|\/)/g, function(e) {
	// 	return e + ","
	// });
	var RPolishArray = RPolish.split(/,/);
	return RPolishArray;
	// return RPolish;
}

//比较操作符优先级
//op1：栈顶操作符  op2：当前字符操作符
//返回>0，代表当前操作符优先级低于栈顶优先级
//各运算符及符号优先级：
// 　　'\0'： -1
// 　　')'： 1
// 　　'('： 2
// 　　'+'、'-'： 3
// 　　'*'、'/'、'%'： 4
// 　　'^'： 5
// 　　其它： 0 [ '2.3', '23', '12/+', '3.14159', '0.24*', '+', '2.1', '1++' ]

function precedence(op1, op2) {
	if (op1 == "(") {
		return -1;
	}
	if (op1 == '+' || op1 == '-') {
		if (op2 == '*' || op2 == '/') {
			return -1;
		} else {
			return 0;
		}
	}

	if (op1 == '*' || op1 == '/') {
		if (op2 == '+' || op2 == '-') {
			return 1;
		} else {
			return 0;
		}
	}
}

console.log(toRPolish("2.3+23/12+(3.14159*0.24)+(2.1+1)"));
var result = toRPolish("2.3+23/12+(3.14159*0.24)+(2.1+1)");
console.log(calculate(result));
console.log(calculate(["6", "5", "2", "3", "+", "8", "*", "+", "3", "+", "*"]));


var sweetBox = new Stack();
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('red');
sweetBox.push('yellow');
sweetBox.push('red');
sweetBox.push('white');
sweetBox.push('yellow');
sweetBox.push('white');
sweetBox.push('yellow');
sweetBox.push('white');
sweetBox.push('red');
//取出不喜欢的颜色 
function getColor(element, stack) {
	var getColorStack = new Stack();
	var setColorStack = new Stack();
	while (stack.length() > 0) {
		if (stack.peek() == element) {
			getColorStack.push(element);
			stack.pop();
		} else {
			setColorStack.push(stack.peek());
			stack.pop();
		}
	}
	while (setColorStack.length() > 0) {
		stack.push(setColorStack.peek());
		setColorStack.pop();
	}
	console.log(stack.peek());
}
getColor('red', sweetBox);