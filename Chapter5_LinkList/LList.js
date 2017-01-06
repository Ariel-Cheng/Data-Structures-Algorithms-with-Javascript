//约瑟夫问题，循环链表

function Node(element) {
	this.element = element;
	this.next = null;
}

//链表构造函数
function Llist() {
	//头节点为1，不要傻傻设成head啦~
	this.head = new Node("1");
	this.head.next = head;
	this.remove = remove;
	this.insert = insert;
	this.find = find;
	this.display = display;
}

function find(element) {
	var curr = this.head;
	while (curr.element != element) {
		curr = curr.next;
	}
	return curr;
}

function insert(element, newElement) {
	var preNode = find(element);
	var curr = new Node(newElement);
	curr.next = preNode.next;
	preNode.next = curr;
}

//循环，1-3报数，去除3
function remove() {
	var curr = this.head;
	while (curr.next.next != null && curr.next.next.item != curr.item) {
		var temp = curr.next.next;
		curr.next.next = temp.next;
		temp.next = null;
		curr = curr.next.next;
	}
	return curr;

}

function display(flag, current) {
	var curr = this.head;
	//flag为1，表示没有进行游戏，输出所有，为0，输出游戏中剩下的人
	if (flag) {
		while (curr.next.item != "1") {
			console.log(curr.item);
			curr = curr.next;
		}
	}else{
		console.log(curr.item);
		console.log(curr.next.item);
	}
}

var Ylist = new Llist();
for(var i = 1;i<41;i++){
	Ylist.insert(i.toString(),(i+1).toString());
}
//null
Ylist.display(1,null);
Ylist.remove();
Ylist.display(0,null);