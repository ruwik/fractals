const generate = require('./fractalFunctions.js').generate;
const expand = require('./fractalFunctions.js').expand;

let kochCurve = function(number,length){
  let distance = " fd "+length;
  let ruleToGenerate = {"+":"+","-":"-","F":"F+F-F-F+F"};
  let axiom = "F";
  let ruleToExpand = {"F":distance,"+":" lt 90","-":" rt 90"};
  return " rt 90"+expand(axiom,ruleToGenerate,number,ruleToExpand);
}
exports.kochCurve=kochCurve;

let sTriangle = function(number,length){
  let distance = " fd "+length;
  let ruleToGenerate = {"+":"+","-":"-","F":"F-G+F+G-F","G":"GG"};
  let axiom = "F-G-G";
  let ruleToExpand = {"F":distance,"G":distance,"+":" lt 120","-":" rt 120"};
  let commands = expand(axiom,ruleToGenerate,number,ruleToExpand);
  return 'rt 30'+commands;
}
exports.sTriangle=sTriangle;

let sArrowHeadedCurve = function(number,length){
  let distance = " fd "+length;
  let ruleToGenerate = {"+":"+","-":"-","F":"G-F-G","G":"F+G+F"};
  let axiom = "F";
  let ruleToExpand = {"F":distance,"G":distance,"+":" lt 60","-":" rt 60"};
  let commands = expand(axiom,ruleToGenerate,number,ruleToExpand);
  return 'rt 30'+commands;
}
exports.sArrowHeadedCurve=sArrowHeadedCurve;

let dragonCurve = function(number,length){
  let distance = " fd "+length;
  let ruleToGenerate = {"F":"F","+":"+","-":"-","X":"X+YF+","Y":"-FX-Y"};
  let axiom = "FX";
  let ruleToExpand = {"F":distance,"X":"","Y":"","+":" rt 90","-":" lt 90"};
  return expand(axiom,ruleToGenerate,number,ruleToExpand);
}
exports.dragonCurve=dragonCurve;

let binaryTree = function(number,length){
  let distance = " pd fd "+length;
  let open = ' pu make "list firstput pos :list make "l firstput heading :l lt 45'
  let close = ' pu make "p item 1 :list make "list butfirst :list setpos :p make "h item 1 :l make "l butfirst :l setheading :h rt 45'
  let ruleToGenerate = {"0":"1[0]0","1":"11","[":"[","]":"]"};
  let axiom = "0";
  let ruleToExpand = {"0":distance,"1":distance,"[":open,"]":close};
  return 'make "list [] make "l []'+expand(axiom,ruleToGenerate,number,ruleToExpand);
}
exports.binaryTree=binaryTree;

let fractalPlant = function(number,length){
  let distance = " pd fd "+length;
  let open = ' pu make "list firstput pos :list make "l firstput heading :l'
  let close = ' pu make "p item 1 :list make "list butfirst :list setpos :p make "h item 1 :l make "l butfirst :l setheading :h'
  let ruleToGenerate = {"+":"+","-":"-","[":"[","]":"]","F":"FF","X":"F[-X][X]F[-X]+FX"};
  let axiom = "X";
  let ruleToExpand = {"X":"","[":open,"]":close,"F":distance,"-":" lt 25","+":" rt 25"};
  return 'make "list [] make "l []'+expand(axiom,ruleToGenerate,number,ruleToExpand);
}
exports.fractalPlant=fractalPlant;

const sCarpet = require('./sCarpet.js').sCarpet;
exports.sCarpet = sCarpet;
