function List() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.length = listSize;
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    } else {
        return false;
    }
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);

    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }

    return false;
}

function insertLar(element){
    for(var i = 0;i<this.length;i++){
        
    }
}


function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        this.pos--;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        this.pos++;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(postion) {
    this.pos = postion;
}

function getElement() {
    return this.dataStore[this.pos];
}

String.prototype.trim = function() {
    return this.replace(/^\s+(.*?)\s+$/, "$1");
}

function createArr(file) {
    var ts = new Array();
    try {
        var fso = new ActiveXObject("scripting.filesystemobject_0418s");
        var txtstream = fso.openTextFile(file);
        var txt = '';
        while (!txtstream.atEndOfLine) {
            ts.push(txtstream.readLine());
        }
        txtstream.close();
        txtstream = null;
        fso = null;
    } catch (e) {
        console.log(e);
    }
    var arr = ts.split("\n");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + " , " + list.getElement()["movie"]);
        } else {
            console.log(list.getElement())
        }
    }
}


function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, filmList, CustomerList) {
    if (filmList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log(movie + " is not available.");
    }
}


var movies = createArr("./films.txt");
var customers = new List();
var movieList = new List();

for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

displayList(movieList);

checkOut("Jane Doe", "The Godfather", movieList, customers);
displayList(customers);
