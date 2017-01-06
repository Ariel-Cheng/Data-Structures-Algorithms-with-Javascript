//双向链表
//在初始化链表时，定义一个当前结点，并复制给头节点，移动时跟着移动

//Node对象
function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}

//链表对象
function LinkedList(){
	this.head = new Node("head");
	this.currentNode = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.remove = remove;
	this.findLast = findLast;
	this.dispReverse = dispReverse;
	this.advance = advance;
	this.back = back;
	this.show = show;
}

//倒序输出链表中的所有节点
function dispReverse(){
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)){
        document.write(currNode.element + '&nbsp;');
        currNode = currNode.previous;
    }
}

//找到最后一个节点
function findLast(){
    var currNode = this.head;
    while (!(currNode.next == null)){
        currNode = currNode.next;
    }
    return currNode;
}

//删除某一个节点
function remove(item){
    var currNode = this.find(item);
    if(!(currNode.next == null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

//打印所有链表节点
function display(){
    var currNode = this.head;
    while (!(currNode.next == null)){
       console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

//找到某一个节点
function find(item){
    var currNode = this.head;
    while (currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

//插入某一个节点
function insert(newElement , item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    current.next.previous = newNode;
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

//在链表中向前移动n个节点
function advance(n){
    while ((n>0) && !(this.currentNode.next==null)){
        this.currentNode = this.currentNode.next; 
        n--;
    }
}

//在链表中向后移动n个节点
function back(n){
    while (n>0 && !(this.currentNode.element=='head')){
        this.currentNode = this.currentNode.previous;
        n--;
    }
}

//显示当前节点
function show(){
    console.log(this.currentNode.element);
}

var cities = new LinkedList();
cities.insert('Conway','head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma' , 'Carlisle');
cities.insert('dezhou' , 'Alma');
cities.insert('alasijia' , 'dezhou');
cities.display();
cities.show();
cities.advance(4);
cities.back(2);
cities.show();
