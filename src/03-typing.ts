//Vamos a aprender a declarar variables
// para crear variables se utiliza palabra clave let, var (no recomendado)
// para las contstate se utiliza el const

//inferencia, Segun el profesor de platzi es mejor utilizar el motor de inferencia
let myProductname = "Arroz";
let myProductPrice = 132;
let myProductState= true;

(()=> {
  let  name = "Yeshua"
  let lastName = "Tegue";
  let Age = 2;

  console.log(`Hola ${name} ${lastName}, tiene ${Age} Años` );


})();

//Tipos

//number

(()=>{
  let entero: number = 42;
  let decimal: number = 3.14;
  let negativo: number = -8;
  let exponencial: number = 6.022e23;
  let infinito: number = Infinity;
  let noNumero: number = NaN;
  let sum: number =  infinito +  negativo;
  let max: number = Number.MAX_VALUE;
  let min = Number.MIN_VALUE;
  let value = entero.toExponential(2);

  console.log(entero+decimal+0.023);

})();

(()=>{
  let productInStock: number;
  productInStock=10
  console.log("Valor",productInStock)

  let discount = parseInt('1232');
  let floatq = parseFloat('12.04');
  let discount1 = parseInt('sdgsd');

  console.log(discount);
  console.log(floatq)
  console.log(discount1);
  console.log(Infinity);
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MAX_VALUE);
  console.log(Number.NEGATIVE_INFINITY);
  console.log(Number.NEGATIVE_INFINITY + 1);
  console.log(Number.MAX_VALUE+1);

})();


// string
(()=>{
  let myName: string =  "Janer"
  let myLastName = "Tegue";
  let fullName = myName.concat(myLastName);
   console.log(fullName);
  console.log(`backtick`);
  console.log("comillas doble");
  console.log('comillas simple');

  const description = `
    Name: ${myName},
    Lastname: ${myLastName},
    FullName: ${myName} ${myLastName},
  `;
  console.log(description);

})();



//Boolean
(()=>{
  let state = true;
  let isEnabled: boolean = false;
  console.log(state);
  if (state)
     console.log("state");
})();





