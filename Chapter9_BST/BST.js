function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder; 
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.predataStore = [];
    this.remove = remove;
    this.update = update;
    this.nodeNum = nodeNum;
    this.edgeNum = edgeNum;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() +  " : " +node.count);
        inOrder(node.right);
    }
}

function preOrder(node,arr) {
    if (!(node == null)) {
        arr.push(node.data);
        preOrder(node.left,arr);
        preOrder(node.right,arr);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    console.log(current.data);
}

function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    console.log(current.data);
}

function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; ++i) {
        console.log(arr[i].toString() + ' ');
        if (i % 10 == 0) {
            console.log("\n");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

function nodeNum(){
  this.preOrder(this.root,this.predataStore);
  console.log(this.predataStore.length);
}
function edgeNum(node){
    var num = 0;
    if(node!=null){
        if(node.left!=null){
            num++;
            num += edgeNum(node.left)-0;
        }
        if(node.right!=null){
            num++;
            num += edgeNum(node.right);
        }
    }
   return num;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade == null) {
        gradedistro.insert(g);
    } else {
        gradedistro.update(g);
    }
}
gradedistro.inOrder(gradedistro.root);
gradedistro.getMax();
gradedistro.getMin();
gradedistro.nodeNum();
var d = gradedistro.edgeNum(gradedistro.root);
console.log(d);



