//数组测试平台类
//因为js本身已经有Array类所以叫CArray，创建一个数组类，封装一些常见的数组操作函数
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap; //交换数组数据
    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.gaps = [701,301,132,57,23,10,4,1];
    this.shellsort = shellsort;
    this.shellsort1 = shellsort1;
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
}

function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var str = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            str += "\n";
        }
    }
    return str;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//一直冒泡，两两比较，一趟之后最大的值在最右
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer > 1; outer--) {
        for (var inner = 0; inner < outer; inner++) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
        //console.log(this.toString());
    }
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
myNums.insertionSort();
console.log(myNums.toString());


//查找最小的值，放在最左，依次查找合适的值，放在合适的位置
function selectionSort() {
    var numElements = this.dataStore.length;
    var min;
    for (var outer = 0; outer < numElements; outer++) {
        min = outer;
        for (var inner = outer + 1; inner < numElements; inner++) {
            if (this.dataStore[min] > this.dataStore[inner]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
        }
    }
}

//插入排序，前n-1个数据的顺序已经排好，将第n个数据插入变n个数据，并非通过数据交换，而是通过较大的数组元素移动到右边，为左侧的较小元素腾出位置供插入，
function insertionSort(){
    var temp,inner;
    for(var outer = 1;outer<this.dataStore.length;++outer){
        temp = this.dataStore[outer];
        inner = outer;
        while(inner>0&&(this.dataStore[inner-1] >=temp)){
            this.dataStore[inner] = this.dataStore[inner -1];
            --inner;
        }
        //这个inner就是上边的--inner
        this.dataStore[inner] = temp;
        //console.log(this.dataStore);
    }
}

//基本排序算法计时比较
//应该使用同一个nums数组来比较，所以应该进行深赋值。
function copy(arr){
   var arr1 = [];
   for(var i = 0;i<arr.length;i++){
    arr1[i]=arr[i];
   }
   return arr1;
}
var numElements = 10000;
var nums = new CArray(numElements);
var nums1 = new CArray(numElements);
var nums2 = new CArray(numElements);
nums.setData();
nums1.dataStore = copy(nums.dataStore);
nums2.dataStore = copy(nums.dataStore);
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop-start;
console.log("对"+numElements+"个元素执行冒泡排序消耗的时间为"+elapsed+"毫秒。");
var start = new Date().getTime();
nums1.selectionSort();
var stop = new Date().getTime();
var elapsed = stop-start;
console.log("对"+numElements+"个元素执行选择排序消耗的时间为"+elapsed+"毫秒。");
var start = new Date().getTime();
nums2.insertionSort();
var stop = new Date().getTime();
var elapsed = stop-start;
console.log("对"+numElements+"个元素执行插入排序消耗的时间为"+elapsed+"毫秒。");

function shellsort(){
    for(var i=0;i<this.gaps.length;i++){
        for(var j = this.gaps[i];j<this.dataStore.length;j++){
            var temp = this.dataStore[j];
            for(var k = j;k>=this.gaps[i]&&this.dataStore[k-this.gaps[i]]>temp;k -=this.gaps[i]){
                this.dataStore[k] = this.dataStore[k-this.gaps[i]];
            }
            this.dataStore[k] = temp;
        }
    }
}

var numsshell = new CArray(10);
numsshell.setData();
console.log(numsshell.toString());
numsshell.shellsort();
console.log(numsshell.toString());


//dynamic shell gaps
function shellsort1(){
    var N = this.dataStore.length;
    var h = 1;
    while(h<N/3){
        h = h*3+1;
    }
    while(h>1){
        for(var i = h;i<N;i++){
            for(var j = i;j>=h&&this.dataStore[j]<this.dataStore[j-h];j-=h){
                swap(this.dataStore,j,j-h);
            }
        }
        h = (h-1)/3;
    }
}

var nums2 = new CArray(10);
nums2.setData();
console.log(nums2.toString());
nums2.shellsort1();
console.log(nums2.toString());

//two shellsort algorithm comparison
var nums3 = new CArray(100000);
nums3.setData();
var startTime = new Date().getTime();
nums3.shellsort();
var endTime = new Date().getTime();
var elapsed = endTime-startTime;
console.log("硬编码间隔序列的希尔排序耗时： "+elapsed+"毫秒。");
nums3.clear();
nums3.setData();
startTime = new Date().getTime();
nums3.shellsort1();
endTime = new Date().getTime();
elapsed = endTime-startTime;
console.log("硬编码间隔序列的希尔排序耗时： "+elapsed+"毫秒。");   


//自底而上的归并排序
function mergeSort(arr){
    if(arr.length<2){
        return;
    }
    var step = 1;
    var left,right;
    while(step<arr.length){
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }

        step *= 2;
    }
}

function mergeArrays(arr,startLeft,stopLeft,startRight,stopRight){
    var leftArr = new Array(stopLeft-startLeft + 1);
    var rightArr = new Array(stopRight - startRight +1);
    var k = startRight;
    for(var i = 0;i<(rightArr.length -1);i++){
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for(var i = 0;i<(leftArr.length -1);i++){
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length -1] = Infinity;//用infinity来标记子数组的结尾
    leftArr[leftArr.length-1] = Infinity;
    var m =0;
    var n = 0;
    for(var k = startLeft;k<stopRight;++k){
        if(leftArr[m]<=rightArr[n]){
            arr[k] = leftArr[m];
            m++;
        }else{
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left Array - > ",leftArr);
    console.log("right Array - > ",rightArr);
}

var nums4 = [6,10,1,9,4,8,2,7,3,5];
console.log(nums4);
mergeSort(nums4);
console.log(nums4);

//自顶向下的归并排序（递归）
function merge_sort(arr){
    var arrTemp = new Array(arr.length);
    m_sort(arr,arrTemp,0,arr.length-1);
}

function m_sort(arr,arrTemp,left,right){
    if(left<right){
        var center = Math.floor((left + right)/2);
        m_sort(arr,arrTemp,left,center);
        m_sort(arr,arrTemp,center+1,right);
        merge(arr,arrTemp,left,center+1,right);
    }
}

function merge(arr,arrTemp,leftPos,rightPos,rightEnd){
    var leftEnd = rightPos - 1,
        tempPos = leftPos,
        total = (rightEnd-leftPos +1);

    while(leftPos<=leftEnd &&rightPos <=rightEnd){
        if(arr[leftPos] < arr[rightPos]){
            arrTemp[tempPos++] = arr[leftPos++];
        }else{
            arrTemp[tempPos++] = arr[right++];
        }
    }
    while(leftPos<=leftEnd){
        arrTemp[tempPos++] = arr[leftPos ++];
    }
    while(rightPos<=rightEnd){
        arrTemp[tempPos++] = arr[rightPos ++];
    }

    for(var i = 0 ;i<toal;i++,rightEnd--){
        arr[rightEnd] = arrTemp[rightEnd];
    }
}

//快排
function qSort(arr){
    if(arr.length == 0){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for(var i = 1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot,qSort(right));
}

var a=[];
for(var i = 0;i<10;i++){
    a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(qSort(a));