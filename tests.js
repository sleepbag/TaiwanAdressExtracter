QUnit.test( "origin test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "add name after test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號陳小寶");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "add name before test", function( assert ) {

  var adress = new TaiwanAdressExtracter("陳小寶新北市鶯歌區中山路111巷1弄1號");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號", "Passed!" );
});

QUnit.test( "add number test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市鶯歌區中山路111巷1弄1號2樓之一");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市鶯歌區中山路111巷1弄1號2樓之一", "Passed!" );
});

QUnit.test( "miss area test", function( assert ) {

  var adress = new TaiwanAdressExtracter("台北市中山北路二段1巷2號9樓");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "台北市中山北路二段1巷2號9樓", "Passed!" );
});

QUnit.test( "normal test", function( assert ) {

  var adress = new TaiwanAdressExtracter("新北市板橋區忠孝路127號");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市板橋區忠孝路127號", "Passed!" );
});

QUnit.test( "normal test", function( assert ) {

  var adress = new TaiwanAdressExtracter("收貨地址：陳小寶，0911111111，台灣 新北市 汐止區新台五路一段268號2樓");
  var result = adress.Process();
  console.log(result);
  assert.ok( result == "新北市汐止區新台五路一段268號2樓", "Passed!" );
});
