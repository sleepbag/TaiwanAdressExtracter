QUnit.test( "原始測試", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "增加無關字串在後，例如姓名", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號陳小寶");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "增加無關字串在前，例如姓名", function( assert ) {

  var adress = new TaiwanAdressExtracter("陳小寶新北市鶯歌區中山路111巷1弄1號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "地址最後含有中文數字", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓之一");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓之一", "Passed!" );
});

QUnit.test( "地址最後含有阿拉伯數字", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓之1");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓之1", "Passed!" );
});

QUnit.test( "地址最後使用符號 - 及阿拉伯數字", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓-1");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓-1", "Passed!" );
});

QUnit.test( "地址最後使用符號 - 及中文數字", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓-三");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓-三", "Passed!" );
});

QUnit.test( "即使原始地址缺少「區」、「鄉」，是否正常擷取", function( assert ) {

  var adress = new TaiwanAdressExtracter("台北市中山北路二段1巷2號9樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓", "Passed!" );
});

QUnit.test( "地址中一般的數字測試", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市板橋區忠孝路127號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市板橋區忠孝路127號", "Passed!" );
});

QUnit.test( "複雜字串綜合測試", function( assert ) {

  var adress = new TaiwanAdressExtracter("收貨地址：陳小寶，0911111111，台灣 新北市 汐止區新台五路一段268號2樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市汐止區新台五路一段268號2樓", "Passed!" );
});

QUnit.test( "綜合測試", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市中山北路二段1巷2號9樓2");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓2", "Passed!" );
});

QUnit.test( "加入無關字串綜合測試", function( assert ) {
  var adress = new TaiwanAdressExtracter("商店街市集大拍賣 台北市中山北路二段1巷2號9樓2");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓2", "Passed!" );
});

QUnit.test( "地址中複雜數字", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市中山北路二段115巷20號9樓之1");
  var result = adress.Process();
//  console.log(result);
  assert.ok( result == "台北市中山北路二段115巷20號9樓之1", "Passed!" );
});

QUnit.test( "地址中複雜數字加符號", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市杭州南路一段15-1號11樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市杭州南路一段15-1號11樓", "Passed!" );
});

QUnit.test( "含有不是地址的複雜資訊", function( assert ) {
  var adress = new TaiwanAdressExtracter("收貨地址：程O雯，0900000000，台灣 新北市 汐止區新台五路一段268號2樓");
  var result = adress.Process();                           
  //console.log(result);
  assert.ok( result == "新北市汐止區新台五路一段268號2樓", "Passed!" );
});

QUnit.test( "綜合測試-新北", function( assert ) {
  var adress = new TaiwanAdressExtracter("新北市板橋區忠孝路127號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市板橋區忠孝路127號", "Passed!" );
});

QUnit.test( "開頭不完整地址排除", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市北投區台北市東華街一段502號11F");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "台北市北投區東華街一段502號11F", "Passed!" );
});


QUnit.test( "在地址後增加了地標註記，並且前面有郵遞區後等無關字串", function( assert ) {
  var adress = new TaiwanAdressExtracter("333桃園市龜山區文化一路259號長庚大學第一醫學大樓七樓寄生蟲科");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "桃園市龜山區文化一路259號長庚大學第一醫學大樓七樓寄生蟲科", "Passed!" );
});

QUnit.test( "桃園縣轉桃園市", function( assert ) {
  var adress = new TaiwanAdressExtracter("桃園縣蘆竹鄉吉林路103號9樓");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "桃園市蘆竹鄉吉林路103號9樓", "Passed!" );
});

QUnit.test( "台北縣轉換新北市", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北縣土城市中央路四段281-13號");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市土城市中央路四段281-13號", "Passed!" );
});

QUnit.test( "不正確初始: undefined", function( assert ) {
  var init = undefined;
  var adress = new TaiwanAdressExtracter(init);
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "", "Passed!" );
});