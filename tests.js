QUnit.test( "origin test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "add name after test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號陳小寶");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "add name before test", function( assert ) {

  var adress = new TaiwanAdressExtracter("陳小寶新北市鶯歌區中山路111巷1弄1號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "add number test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓之一");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓之一", "Passed!" );
});

QUnit.test( "add arabian number test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓之1");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓之1", "Passed!" );
});

QUnit.test( "mix number test 1", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓-1");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓-1", "Passed!" );
});

QUnit.test( "mix number test 2", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓-三");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓-三", "Passed!" );
});

QUnit.test( "miss area test", function( assert ) {

  var adress = new TaiwanAdressExtracter("台北市中山北路二段1巷2號9樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓", "Passed!" );
});

QUnit.test( "normal test 1", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市板橋區忠孝路127號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市板橋區忠孝路127號", "Passed!" );
});

QUnit.test( "normal test 2", function( assert ) {

  var adress = new TaiwanAdressExtracter("收貨地址：陳小寶，0911111111，台灣 新北市 汐止區新台五路一段268號2樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市汐止區新台五路一段268號2樓", "Passed!" );
});

QUnit.test( "normal test 3", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市中山北路二段1巷2號9樓2");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓2", "Passed!" );
});

QUnit.test( "city test 1", function( assert ) {
  var adress = new TaiwanAdressExtracter("商店街市集大拍賣 台北市中山北路二段1巷2號9樓2");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓2", "Passed!" );
});

QUnit.test( "city test 2", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市中山北路二段115巷20號9樓之1");
  var result = adress.Process();
//  console.log(result);
  assert.ok( result == "台北市中山北路二段115巷20號9樓之1", "Passed!" );
});

QUnit.test( "city test 3", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市杭州南路一段15-1號11樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "台北市杭州南路一段15-1號11樓", "Passed!" );
});

QUnit.test( "city test 4", function( assert ) {
  var adress = new TaiwanAdressExtracter("收貨地址：程佳雯，0937580371，台灣 新北市 汐止區新台五路一段268號2樓");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市汐止區新台五路一段268號2樓", "Passed!" );
});

QUnit.test( "city test 5", function( assert ) {
  var adress = new TaiwanAdressExtracter("新北市板橋區忠孝路127號");
  var result = adress.Process();
  //console.log(result);
  assert.ok( result == "新北市板橋區忠孝路127號", "Passed!" );
});

QUnit.test( "city test 6", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北縣土城市中央路四段281-13號三樓");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市土城市中央路四段281-13號三樓", "Passed!" );
});

QUnit.test( "city test 7", function( assert ) {
  var adress = new TaiwanAdressExtracter("台北市北投區台北市東華街一段502號11F");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "台北市北投區東華街一段502號11F", "Passed!" );
});


QUnit.test( "city test 8", function( assert ) {
  var adress = new TaiwanAdressExtracter("333桃園市龜山區文化一路259號長庚大學第一醫學大樓七樓寄生蟲科");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "桃園市龜山區文化一路259號長庚大學第一醫學大樓七樓寄生蟲科", "Passed!" );
});

QUnit.test( "city test 9", function( assert ) {
  var adress = new TaiwanAdressExtracter("桃園縣蘆竹鄉吉林路103號9樓");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "桃園市蘆竹鄉吉林路103號9樓", "Passed!" );
});
