function Queue() {
    this.dataStore = [];
    this.front = front;
    this.back = back;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function count(){
    return this.dataStore.length;
}

function enqueue(element) {
    return this.dataStore.push(element);
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
    var reStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        reStr += this.dataStore[i] + "\n";
    }
    return reStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

//Dancer Object
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = ["F Allison McMillan", "M Frank Opitz", "M Mason McMillan", "M Clayton Ruff", "F Cheryl Ferenback", "M Raymond Williams", "F Jennifer Ingram", "M Bryan Frazer", "M David Durr", "M Danny Martin", "F Aurora Adney"]
    for(var i = 0;i<names.length;i++){
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex == "F"){
            females.enqueue(new Dancer(name,sex));
        }else{
            males.enqueue(new Dancer(name,sex));
        }
    }
}

function dance(males,females){
    while(!females.empty() && !males.empty()){
        var female = females.dequeue();
        var male = males.dequeue();
        console.log(female.name +" dancing with " +male.name);
    }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers,femaleDancers);
dance(maleDancers,femaleDancers);

if(!femaleDancers.empty()){
    console.log(femaleDancers.front().name +" is waiting to dance.");
}

if(!maleDancers.empty()){
    console.log(maleDancers.front().name +" is waiting to dance.");
}


//基数排序
//digit数字，表示个位或者十位的值
function distribute(nums,queues,n,digit){
    for(var i = 0;i<n;i++){
        if(digit==1){
            queues[nums[i]%10].enqueue(nums[i]);
        }else{
            queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
        }
    }    
}
function collect(queues,nums){
    var i = 0;
    //数字0-9，就10个queue
    for(var digit =0;digit<10;++digit){
        while(!queues[digit].empty()){
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr){
    for(var i = 0;i<arr.length;i++){
        console.log(arr[i]+" ");
    }
}

var queues=[];
for(var i = 0;i<10;++i){
    queues[i] = new Queue();
}

var nums = [];
for(var i = 0;i<10;++i){
    nums[i] = Math.floor(Math.floor(Math.random()*101));
}

dispArray(nums);
distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
collect(queues,nums);
dispArray(nums);