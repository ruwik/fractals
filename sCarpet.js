let createZeroMatrix = function(size){
  let list = [];
  for (let index = 0;index < size;index++) {
    list.push(0);
  };
  return list;
};

let sCarpetList = function(iteration){
  let list = [[1,1,1],[1,0,1],[1,1,1]];
  let outlist = [];
  let length = 9;
  let iter = 0;
  for (let index = iteration;index > 1;index--) {
    for (let checker = 0;checker < length;checker++) {
      let number = length/3;
      if(iter > number-1){
        iter = 0;
      };
      array = list[iter];
      array1 = array;
      let number1 = length/3;
      let number2 = 2*(length/3);
      if(checker > number1-1 && checker < number2){
        array1 = createZeroMatrix(array.length);
      };
      array = array.concat(array1).concat(array);
      outlist = outlist.concat([array]);
      iter++;
    };
    list = outlist;
    outlist = [];
    length*=3;
    iter = 0;
  };
  return list;
};

let sCarpet = function(iteration,size){
  list = sCarpetList(iteration);
  let string = "";
  for (let index = 0;index < list.length;index++) {
    array = list[index];
    string+=" [";
    for (var i = 0; i < array.length; i++) {
      string = string+" "+array[i];
    };
    string+=" ]";
  };
  return string;
};
exports.sCarpet=sCarpet;
