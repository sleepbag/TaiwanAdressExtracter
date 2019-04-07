class TaiwanAdressExtracter {

  constructor(string){
    this._string=""
    if(string!=undefined){
      this._string = string;
    }
    
    this._cities = new Array();
    this._cities.push("高雄市");
    this._cities.push("臺北市");
    this._cities.push("台北市");
    this._cities.push("基隆市");
    this._cities.push("新北市");
    this._cities.push("台北縣");
    this._cities.push("宜蘭縣");
    this._cities.push("連江縣");
    this._cities.push("新竹市");
    this._cities.push("新竹縣");
    this._cities.push("桃園市");
    this._cities.push("桃園縣");
    this._cities.push("苗栗縣");
    this._cities.push("臺中市");
    this._cities.push("台中市");
    this._cities.push("彰化縣");
    this._cities.push("南投縣");
    this._cities.push("嘉義市");
    this._cities.push("嘉義縣");
    this._cities.push("雲林縣");
    this._cities.push("臺南市");
    this._cities.push("台南市");
    this._cities.push("澎湖縣");
    this._cities.push("金門縣");
    this._cities.push("屏東縣");
    this._cities.push("臺東縣");
    this._cities.push("台東縣");
    this._cities.push("花蓮縣");
  }

  getInitString(){
    if(this._string!=undefined){
      return this._string;
    }
    return "";
  }

  Process(){

    //注意是否會有崩潰的情形
    var adress = "";

    var city = ["市","縣"];
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
    var room = ["室","科"];

    //分段規則
    var segments = Array();
    segments.push(city);
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


    for(var i = 0;i<this._cities.length;i++){
      var adress_match = ""
      adress_match += this._cities[i];
      adress_match += ".+";
      var tmp = regEx_First(this._string,adress_match);

      //console.log(tmp);
      if (tmp != ""){
        tmp = replaceIndex(tmp,2,this._cities[i],"");
        if(this._cities[i] == "台北縣"){
          tmp = tmp.replace("台北縣","新北市");
        }
        if(this._cities[i] == "桃園縣"){
          tmp = tmp.replace("桃園縣","桃園市");
        }

        adress = tmp;
        break;
      }
    }

    adress =  adress.replace(" ","");

    
    var adressBagArray= [];
    
    var tmpAdress = adress;

    for(var i = 0;i<segments.length;i++){
      var segment = segments[i];
      for(var j = 0; j < segment.length;j++){
        //console.log("擷取分區: " + segment[j]);
        var tail = getStrinSegmentTail(tmpAdress,segment[j]);
        
        if(tail){
          adressBagArray.push(tail)
        }

        for(var adBagIt = 0; adBagIt<adressBagArray.length;adBagIt++){
          tmpAdress = tmpAdress.replace(adressBagArray[adBagIt],"");
        }

      }
    }

    var adressBag = "";
    for(var adBagIt = 0; adBagIt<adressBagArray.length;adBagIt++){
      var isRepead = false;
      for(var secondIt = 0; secondIt<adBagIt;secondIt++){
        if(adressBagArray[secondIt] == adressBagArray[adBagIt]){
          isRepead = true;
          break;
        }
      }
      if(!isRepead){
        adressBag+=adressBagArray[adBagIt];
      }
    }

    var numBag = "";
    if(Number.isInteger(Number(tmpAdress[0]))||tmpAdress[0] == "之" || tmpAdress[0] == "-"){
      numBag += tmpAdress[0];
      tmpAdress = tmpAdress.replace(numBag,"");
      for(var i = 0;i<tmpAdress.length;i++){
        if(isCnNumber(tmpAdress[i])||Number.isInteger(Number(tmpAdress[i]))){
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
