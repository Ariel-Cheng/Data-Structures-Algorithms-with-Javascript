function Data(data){
	this.data = data;
	this.next = null;
}

function Set(){
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.contains = contains;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.different = different;
	this.show = show;
	this.sort = sort;
	this.higher = higher;
}

/*
 * @param: data
 * @return: {boolean}true/false
 */
function add(data){
	if(this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		this.sort();
		return true;
	}else{
		return false;
	}
}

function remove(data){
	var pos = this.dataStore.indexOf(data);
	if(pos>-1){
		this.dataStore.spilce(pos,1);
		return true;
	}else{
		return false;
	}
}

function show(){
	return this.dataStore;
}

/*
 * @param: data
 * @return: {boolean}true/false
 */
function contains(data){
	if(this.dataStore.indexOf(data)>-1){
		return true;
	}else{
		return false;
	}
}

function union(set){
	var tempSet = new Set();
	for(var i = 0;i<this.dataStore.length;i++){
		tempSet.add(this.dataStore[i]);
	}
	for(var i = 0;i<set.dataStore.length;i++){
		if(!tempSet.contains(set.dataStore[i])){
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

function intersect(set){
	var tempSet = new Set();
	for(var i = 0;i<this.dataStore.length;i++){
		if(set.contains(this.dataStore[i])){
			tempSet.dataStore.push(this.dataStore[i]);
		}
	}
	return tempSet;
}

function size(){
	return this.dataStore.length;
}

function subset(set){
	if(this.size()>set.size()){
		return false;
	}else{
		for(var i = 0;i<this.size();i++){
			if(!set.contains(this.dataStore[i])){
				return false;
			}
		}
	}
	return true;
}

function difference(){
	var tempSet = new Set();
	for(var i = 0 ;i < this.size();i++){
		if(!set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function sort(){
	return this.dataStore.sort();
}

function higher(element){
	var temp = element,
			n = 0;
	for(var i = 0 ;i<this.size();i++){
		if(this.dataStore[i]>element){
				temp = this.dataStore[i]<temp?this.dataStore[i]:temp;
		}else{
				n++;
		}
	}
	if(n==this.size()){
		return false;
	}
	return temp;
}