class Graph{
 constructor(nbresommets){
  this.nbresommets = nbresommets;
  this.listadj = new Map();
 }
 addsommet(v){
  this.listadj.set(v,[]);
 }
 addchemin(v,w){
  this.listadj.get(v).push(w);
  this.listadj.get(w).push(v);
 }
 printgraph(){
  var getkeys = this.listadj.keys(); // recupere keys as : exemple [A[B,C,D,E],B[....], .....]
  for(var i of getkeys){
    var conc = " ";
    var getsommets = this.listadj.get(i);  // pour chaque sommet
    for(var j of getsommets)
     conc = conc + j;
  console.log(i + " " + "->" + " "+ conc);
  }
 }
} // fin class Graph
var test = new Graph(7);
var tab = ['A','B','C','D','E','F','G'];
for(var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('A','E');
    test.addchemin('B','F');
    test.addchemin('B','C');
    test.addchemin('C','F');
    test.addchemin('C','E');
    test.addchemin('D','E');
    test.addchemin('E','G');
    test.addchemin('F','G');
    test.printgraph();
