// cy is the id of DOm element where graphs will come
function createGraph(name,n){
	var html = "";
	html = "<div id='"+name+"'></div>";
	$('document').append(html);
}
function setWidth(name,width,hight){
	// sets width 
	$("#"+name).css("width",width+"px");
	//sets height
	$("#"+name).css("height",height+"px");
}

var nodeCount = 0;
var d =[];

init(5);

//function to initialize number of nodes
function init(name,n){
  for(x = 0;x < n;x++){
    d.push(createNode(x));
  }
}

// adds a new node
function addNode(){
  d.push(createNode(nodeCount));
  nodeCount++;
}

// adds a new edge
function addEdge(first,second){
  d.push(createEdge(first,second));
}

// creates a new node (internal use)
function createNode(nodeNumber){
  var temp = {};
    var t = {};
    t['id'] = nodeNumber;
    temp['data'] = t;
    return temp;
}

// creates a new edge (internal use)
function createEdge(first,second){
   var temp = {};
    var t = {};
    t['id'] = first.toString()+second.toString();
    t['source'] = first;
    t['target'] = second;
    temp['data'] = t;
    return temp;
}

var cy = cytoscape({
  container: $('#cy'),
  
  elements:d,

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],


});
