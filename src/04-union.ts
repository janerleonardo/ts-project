(()=>{
  let userID : string | number;

  function greeting(input: string | number){
    if(typeof input === 'string'){
      console.log(`string ${input.toLowerCase()}`)
    } else {
      console.log(`numbre ${input.toFixed()}`)
    }
  }

  greeting('Janer');
  greeting(123);
})();
