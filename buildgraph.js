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
  var getkeys = this.listadj.keys();
  for(var i of getkeys){
      var conc = " ";
      var listsommet = this.listadj.get(i);
      for(var j of listsommet)
        conc = conc + j;
   console.log(i + " " + "->" + " " + conc);
  }
 } // fin printgraph
} // fin class graph
var tab = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
var test = new Graph(13);
for(var i = 0; i < tab.length; i++)
    test.addsommet(tab[i]);
    test.addchemin('A','B');
    test.addchemin('A','C');
    test.addchemin('A','D');
    test.addchemin('A','E');
    test.addchemin('B','E');
    test.addchemin('B','G');
    test.addchemin('B','H');
    test.addchemin('C','D');
    test.addchemin('C','G');
    test.addchemin('D','F');
    test.addchemin('D','L');
    test.addchemin('D','I');
    test.addchemin('D','K');
    test.addchemin('D','M');
    test.addchemin('E','H');
    test.addchemin('F','K');
    test.addchemin('F','L');
    test.addchemin('G','H');
    test.addchemin('G','I');
    test.addchemin('H','J');
    test.addchemin('I','J');
    test.addchemin('J','M');
    test.addchemin('K','L');
    test.addchemin('K','M');
    console.log("This is your graph each sommet with it adjancy list :");
    test.printgraph();
