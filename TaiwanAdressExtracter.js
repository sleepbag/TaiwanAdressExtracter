class TaiwanAdressExtracter {

  constructor(string){
      this._string = string;
      this._cities = new Array();
  }

  getInitString(){
    return this._string;
  }

  Process(){
    var adress = "";
    var cityReg = "(.{2}[縣市]).+";

    var area = ["市區","鎮區","鎮市","鄉","鎮","區","市"];
    var village = ["村","里"];
    var lin = ["鄰"];
    var stree = ["路","街","大道"];
    var line = ["段"];
    var lane = ["巷"];
    var doo = ["弄"];
    var alley = ["衖"];
    var num = ["號"];
    var level = ["樓","F"];
    var room = ["室"];

    var segments = Array();
    segments.push(area);
    segments.push(village);
    segments.push(lin);
    segments.push(stree);
    segments.push(line);
    segments.push(lane);
    segments.push(doo);
    segments.push(alley);
    segments.push(num);
    segments.push(level);
    segments.push(room);


    adress = regEx_First(this._string,"(.{2}[縣市]).+");
    adress =  adress.replace(" ","");
    var adressBag = "";
    var tmpAdress = adress;
    for(var i = 0;i<segments.length;i++){
      var segment = segments[i];
      for(var j = 0;j<segment.length;j++){
        //console.log(segment[j]);
        var tail = getStrinSegmentTail(tmpAdress,segment[j]);
        if(tail){
          adressBag += tail;
          tmpAdress =  tmpAdress.replace(tail,"");
          break;
        }
      }
    }
    var numBag = "";
    if(tmpAdress[0] == "之" || tmpAdress[0] == "-"){
      numBag += tmpAdress[0];
      tmpAdress = tmpAdress.replace(numBag,"");
      for(var i = 0;i<tmpAdress.length;i++){
        if(isCnNumber(tmpAdress[i])||Number.isInteger(tmpAdress[i])){
          numBag += tmpAdress[i];
        }else{
          break;
        }
      }
    }
    var final = adressBag + numBag;
    return final;
  }
}

class City{
  constructor(string){
    this._name = string;
    this._areas = new Array();
  }
  addArea(area){
      this._areas.push(area);
  }
  getAreas(){
    return this._areas;
  }
}

class Area{
    constructor(string,code){
        this._name = string;
        this._code = code;
    }
    getName(){
      return this._name;
    }
    getCode(){
      return this._code;
    }
}
