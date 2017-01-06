function Vertext(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edge = 0;
    this.adj = [];
    this.vertexList = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.ndfs = ndfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
    this.bfs = bfs;
    this.edgeTo = [];
    this.hasPathTo = hasPathTo;
    this.pathTo = pathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
    this.showNameGraph = showNameGraph;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edge++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        if (this.adj[i][0] != null) {
            console.log(i + " -> " + this.adj[i]);
        }
    }
}

//用于显示名字而非数字的新函数,同时减少了冗余
function showNameGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        // console.log(this.vertexList[i] + " -> ");
        visited.push(this.vertexList[i]);
        var str = "";
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    str += this.vertexList[j];
                }
            }
        }
        console.log(this.vertexList[i] + " -> " + str);
    }
}
var d = new Graph(5);
d.addEdge(0, 1);
d.addEdge(0, 2);
d.addEdge(1, 3);
d.addEdge(1, 4);
d.addEdge(2, 3);
d.addEdge(2, 4);
d.addEdge(0, 4);
d.addEdge(3, 4);
d.showGraph();

//深度遍历 depth-first traversal  
var arr = [];

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log("Visited vertex " + v);
        arr.push(v);
    }
    var i = 1; //adj中用“”空字符占位了，所以从1开始。
    while (this.adj[v] != undefined && i < this.adj[v].length) {
        var w = this.adj[v][i];
        if (!this.marked[w]) {
            this.dfs(w);
        }
        i++;
    }
    // for(var w in this.adj[v]){
    //     if(!this.marked[w]){
    //         this.dfs(w);
    //     }
    // }

}

//非连通图深度遍历
function ndfs(v) {
    this.dfs(v);

    //检测是否已经遍历到所有的节点了
    for (var i = 0; i < this.vertices; i++) {
        //if(marked[i]==false)
        if (arr.indexOf(i) == undefined) {
            this.dfs(i);
        }
    }
}
d.ndfs(0);

//广度优先遍历  breadth-first search
function bfs(v) {
    var queue = [];
    this.marked[v] = true;
    queue.push(v);
    while (queue.length > 0) {
        var s = queue.shift(); //从队列首移除
        if (s != undefined) {
            console.log("Visited vertex " + s);
        }
        // for (var w in this.adj[v]) {
        //     if (!this.marked[w]) {
        //         this.marked[w] = true;
        //         queue.push(w);
        //     }
        // }
        var i = 1; //adj中用“”空字符占位了，所以从1开始。
        while (this.adj[s] != undefined && i < this.adj[s].length) {
            var w = this.adj[s][i];
            if (!this.marked[w]) {
                this.edgeTo[w] = s;
                this.marked[w] = true;
                queue.push(w);
            }
            i++;
        }
    }

}
//d.bfs(0);

//顶点0到点v的最优路径,广度优先遍历，一层层，优先被标记，肯定是最短的层数，最短路径
//从顶点0到点v的最有路径，所以要进行从点0开始的广度优先遍历，记录边edgeTo。
function hasPathTo(v) {
    return this.marked[v];
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

//拓扑排序
function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    //检查是否全部已经遍历到
    for (var i = 0; i < this.vertices; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i = stack.length - 1; i > 0; i--) {
        if (stack[i] !== undefined && stack[i] !== false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    var i = 1; //adj中用“”空字符占位了，所以从1开始。
    while (this.adj[v] != undefined && i < this.adj[v].length) {
        var w = this.adj[v][i];
        if (!visited[w]) {
            this.topSortHelper(w, visited, stack);
        }
        i++;
    }
    stack.push(v);
}

g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ["css1", "css2", "Data Structures", "Assembly Language", "operating Systems", "Algorithms"];
g.showNameGraph();
g.topSort();


//11.1
var timeDate = {};
var startTime = Date.now();
g.dfs(0);
timeDate.dfs = (Date.now() - startTime);

startTime = Date.now();
g.bfs(0);
timeDate.bfs = (Date.now() - startTime);

if (timeDate.dfs > timeDate.bfs) {
    console.log("广度优先遍历更快");
} else {
    console.log("深度优先遍历更快");
}


//11.2存储图，showGraph()

//11.3读取文件图，addEdge()

//11.4居住地
var c = new Graph(10);
c.vertexList = ["home", "Hospital", "Supermarket", "metro", "School", "Market", "Playground", "Police office", "Bus stop", "park"];
c.addEdge(0, 1);
c.addEdge(0, 4);
c.addEdge(0, 8);
c.addEdge(1, 3);
c.addEdge(1, 7);
c.addEdge(2, 5);
c.addEdge(2, 9);
c.addEdge(3, 4);
c.addEdge(6, 0);
c.addEdge(7, 9);
//先遍历一遍不然edgeTo没有值 ,.pop()数组个数减减
c.bfs(0);
var paths = c.pathTo(9);
while (paths.length > 0) {
    if (paths.length > 1) {
        console.log(paths.pop() + "-");
    } else {
        console.log(paths.pop());
    }
}

//11.5
//因为上面执行过

for (var i = 0; i < c.vertices; i++) {
    c.marked[i] = false;
}
c.dfs(0);