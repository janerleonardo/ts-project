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
})();
