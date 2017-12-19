let generate = function(axiom,rule,number){
  let accumulator = "";
  let result = axiom;
  for (let index = 0;index < number;index++) {
    for (let index = 0;index < result.length;index++) {
      accumulator+=rule[result[index]];
    }
    result = accumulator;
    accumulator = "";
  }
  return result;
};

let expand = function(axiom,ruleToGenerate,number,ruleToExpand){
  let input = generate(axiom,ruleToGenerate,number);
  let str = "";
  for (let index = 0;index < input.length;index++) {
    str+=ruleToExpand[input[index]];
  }
  return str;
};

exports.generate=generate;
exports.expand=expand;
