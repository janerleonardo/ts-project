(()=>{
  let prices = [1,2,63,5];
  prices.push(13);
  console.log(prices);

  let arrays = [1,"true",false];
  arrays.push(true)
    let  _object: object = { name: ""};
    let arrays1: (number | string | boolean) []= [];
    let arraysObject: object[] = [];

    arrays1.push(1);
    arrays1.push("");
    arrays1.push(true);
     // arrays1.push(_object); falla
    arraysObject.push(arraysObject);
    arraysObject.push([]);
})();
