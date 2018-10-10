let diamondType = process.argv[2];
let height = process.argv[3];

const generateLine = function(symbol, length){
  let line = "";
  for(let index = 0; index < length; index++){
    line += symbol;
  }
  return line;
}

const generateDiamond = function(height){
  let diamond = "";
  for(let row = 0;row < height;row++){
    let lineLength = row + 1;
    if(row >= height/2){
      lineLength = height - lineLength;
    }
    diamond += generateLine(" ", height/2 - lineLength);
    diamond += generateLine("*", lineLength);
    diamond += generateLine("*", lineLength -1) + "\n";
  }
  
  return diamond;
}

console.log(generateDiamond(height));
