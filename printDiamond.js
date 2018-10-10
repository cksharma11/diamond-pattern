const printLine = function(symbol, length){
  let line = "";
  for(let index = 0; index < length; index++){
    line += symbol;
  }
  return line;
}

const simpleDiamond = function(length){
  let diamond = ""; let initIndex = 1;
  for(let row = 0; row < length; row++){
    indexToPrintSpace = Math.abs((length - initIndex)/2);
    diamond += printLine(" ", indexToPrintSpace);

    indexToPrintStar = (length - (indexToPrintSpace*2));
    diamond += printLine("*", indexToPrintStar) + "\n";
    initIndex += 2;
  }
  return diamond;
}

const hollowDiamond = function(length){
  let initIndex = 3; let diamond = "";
  indexToPrintSpace = Math.abs((length - initIndex)/2);
  diamond += printLine(" ", indexToPrintSpace) + " *" + "\n";

  for(let row = 1; row < length -1; row++){
    indexToPrintSpace = Math.abs((length - initIndex)/2);
    diamond += printLine(" ", indexToPrintSpace) + "*";

    indexToPrintStar = (length - (indexToPrintSpace*2));
    diamond += printLine(" ",Math.abs(indexToPrintStar - 2)) + "*" + "\n";
    initIndex += 2;
  }

  indexToPrintSpace = Math.abs((length - initIndex)/2);
  diamond += printLine(" ", indexToPrintSpace) + "*";

  return diamond;
}

const forwardSlashSymbol = function(){
  return "/";
}

const backwardSlashSymob = function(){
  return "\\";
}

const angledDiamond = function(length){
  let diamond = ""; let initIndex = 3;
  let leftSymbol = forwardSlashSymbol(); 
  let rightSymbol = backwardSlashSymob();
  indexToPrintSpace = Math.abs((length - initIndex)/2);
  diamond += printLine(" ", indexToPrintSpace) + " *" + "\n";
   
  for(let row = 1; row < length -1; row++){
    indexToPrintSpace = Math.abs((length - initIndex)/2);
    diamond += printLine(" ", indexToPrintSpace);
    
    if(indexToPrintSpace == 0){
      diamond += "*";
    } else{
      diamond += leftSymbol;
    }
    
    indexToPrintStar = (length - (indexToPrintSpace*2));
    diamond += printLine(" ", Math.abs(indexToPrintStar -2));

    if(indexToPrintSpace == 0){
      diamond += "*\n"; 
      leftSymbol = backwardSlashSymob(); 
      rightSymbol = forwardSlashSymbol();
    } else{
      diamond += rightSymbol+"\n";
    }
    initIndex += 2;
  }
  indexToPrintSpace = Math.abs((length - initIndex)/2);
  diamond += printLine(" ", indexToPrintSpace) + "*";
   
  return diamond;
}

const main = function(){
  let type = process.argv[2];
  let length = +process.argv[3];
  let diamond;

  if(type == "simple"){
    diamond = simpleDiamond(length);
  }
  if(type == "hollow"){
    diamond = hollowDiamond(length);
  }
  if(type == "angled"){
    diamond = angledDiamond(length);
  }

  console.log(diamond);
}

main();
