(()=>{
    type shirtSize = "S" | "M" | "L" | "XL";

    function createObject (name:string, price:number,createdAT:Date, size: shirtSize){
        return {
          name,
          price,
          size
        }
    }
console.log(createObject("Camina",123,new Date(),"XL"));

/** Arrow Function*/

const _createObject = (
    name:string,
    price:number,
    createdAT:Date,
    size: shirtSize
    ) => {
        return {
          name,
          price,
          createdAT,
          size
        }
    }

    console.log(_createObject("Camina",123,new Date(),"XL"));
    //Dejando un parametro opcional
    const _createObject2 = (title: string,
                           price:number,
                           createdAt: Date,
                           size?: shirtSize
                          ) => ({title,
                                createdAt,
                                size
                              });

    const _createObject3 = (title: string, price:number, createdAt: Date, size: shirtSize = "XL") => ({title, createdAt,  size});

    console.log(_createObject3("Camina",123,new Date()));
    console.log(_createObject3("Camina",123,new Date(),"M"));
})();
