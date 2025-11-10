(()=>{

  let _null: null = null;
  let _undefined: undefined = undefined;

  console.log(_undefined);
  console.log(_null);

  //Crear varibales nullable
  let _number: number | null = null;
  let _string: string | null = null;
  let _boolenan: boolean | null = null;

  function valid ( value: string | null){
    if(value){
      console.log(value);
    }else {
       console.log('is null');
    }
  }

  function validExpert ( value: string | null){
    console.log(`Hola ${value?.toLowerCase() ?? 'null'}`);
      /**
   * Console
   */

  }

  valid('janer');
  valid('null');
  valid(null);
  validExpert(null);
  validExpert('Janer');


})();

  /**
   * console.log(12 || "not found") // 12
console.log(0  || "not found") // "not found"

console.log("javascript" || "not found") // "javascript"
console.log(""     || "not found") // "not found"

console.log(true  || "not found") // true
console.log(false || "not found") // "not found"

console.log(undefined || "not found") // "not found"
console.log(null      || "not found") // "not found"
Usando operador ?? retorna valores deseados


console.log(12 ?? "not found") // 12
console.log(0  ?? "not found") // 0

console.log("javascript" ?? "not found") // "javascript"
console.log(""     ?? "not found") // ""

console.log(true  ?? "not found") // true
console.log(false ?? "not found") // false

console.log(undefined ?? "not found") // "not found"
console.log(null      ?? "not found") /
   */

