(()=>{
  let myDynamicVar: any;

  myDynamicVar = 100;
  console.log(myDynamicVar);
   myDynamicVar = null;
   console.log(myDynamicVar);
  myDynamicVar = {};
   console.log(myDynamicVar);
  myDynamicVar= "";
   console.log(myDynamicVar);

   let foo: any = null;
    foo = "My name"

    const name = (foo as string)
    console.log(name);

    myDynamicVar = 123;
    const rta2 = <number>myDynamicVar
     console.log(rta2);

})();
