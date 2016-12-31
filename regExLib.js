function checkArray(ex){
  return (ex && ex.length > 0);
}

function regEx_First(text,reg){
  var ex;
  ex = text.match(reg);
  if (checkArray(ex)){
    return ex[0];
  }else{return"";}
}

function getStrinSegmentTail(string,segment){

  var tmpstring = "";
  for(var i = 0;i<string.length;i++){
    tmpstring+=string[i];
    var reg = ".+" + segment;
    var result = regEx_First(tmpstring,reg);
    if (result!="")
    {
      return result;
    }
  }
  return false;
}

function isCnNumber(string){
  var cnNumberchar = "[零一二三四五六七八九十百千萬億兆亿万]";
  var ex = string.match(cnNumberchar);
  if (checkArray(ex)){
    return ex[0];
  }else{return false;}
}
