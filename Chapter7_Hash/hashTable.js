function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	this.buildChains = buildChains;
}

function simpleHash(data){
	const H = 37;//使用一个较小的质数，求和时相乘，避免碰撞
	var total = 0;
	for(var i = 0;i<data.length;i++){
		total = total*H + data.charCodeAt(i);
	}
	total = total%this.table.length;
	if(total<0){
		total += this.table.length-1;
	}
	return parseInt(total);
}

//在连续的两个单元格来保存数据，一个保存键值，一个保存数据
function put(key,data){
	var pos = this.simpleHash(key);
	var index = 0;
	if(this.table[pos][index] == undefined){
		this.table[pos][index] = key;
		this.table[pos][index+1] = data;
	}else{
		while(this.table[pos][index]!=undefined){
			index++;
		}
		this.table[pos][index] = key;
		this.table[pos][index+1] = data;
	}
}


function showDistro(){
	var n = 0;
	for(var i = 0;i<this.table.length;i++){
		if(this.table[i][0]!= undefined){
			console.log(i +" : "+this.table[i]);
		}		
	}
}

function get(key){
	var index = 0;
	var pos = this.simpleHash(key);
	if(this.table[pos][index] = key){
		return this.table[pos][index+1];
	}else{
		while(this.table[pos][data]!=key){
			index +=2;
		}
		return this.table[pos][index+1];
	}
	return undefined;
}

function buildChains(){
	for(var i=0;i<this.table.length;i++){
		this.table[i]=new Array();
	}
}

var dictionary = {
	"mike":"123",
	"david":"345",
	"cynthia":"456",
	"auqa":"789"
}

var I = new HashTable();
for(var key in Object.keys(dictionary)){
	 I.put(key,dictionary[key]);
}
console.log(I.get("mike"));

//8.3
var text = "the brown fox jumped over the blue fox";
var arr = text.split(' ');
var words = new HashTable();
var value = 1;
for (var i = 0; i < arr.length; i++) {
	if (words.find(arr[i])) {
		value++;
	}
	words.put(arr[i], value);
}
words.showDistro();