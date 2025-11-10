(()=>{
  const login = (data: {email: string, password: number})=>{
    console.log(data.email, data.password);
  }

  login({
    email: "janer@siesa.com",
    password: 1231423
  });


 /*const login1 = (data: object): object | any => {
    let  value: object | any = {};
    //haciendo uso de hasOwn
     if (Object.hasOwn(data, "id")){
        value.Id = (data as any).id;
    if ("email" in data){
       value.email = data.email;
    }
    if ("password" in data) {
      value.password = data.password;
    }
    return value;

  }*/
 const login1 = (data: object): object => {
    let  value = {};
    //haciendo uso de hasOwn, pero preseunta el problema que el vscode no ifiere que la key existe y muestra error, pero TS  si funciona
  //if (Object.hasOwn(data, "gid")) {
  //  value = { ...value, gid: data.gid };
  //}
  if("gid" in data){
    value = { ...value, gid: data.gid}
  }
  if ("email" in data) {
    value = { ...value, email: data.email };
  }
  if ("password" in data) {
    value = { ...value, password: data.password };
  }

  return value;

  };

  console.log(login1({email: "janer"}));
  console.log(login1({password: "password"}));
  console.log(login1({email: "janer",password: "password"}));
  console.log(login1({gid: "45672"}));
  console.log(login1({gid:"22334", email: "janer",password: "password"}));

})();

(() => {
  type User = { email: string; password: string | number };

  const login = (user: User) => {
    console.log(user.email, user.password);
  };

  const jesusUser = {
    email: "hdjesus",
    password: 12121,
  };

  login(jesusUser);
})();

(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title:string,
    createdAt:Date,
    stock:number;
    size?:Sizes
  };
  const products:Product[]=[];

  const addProduct=(data:Product) =>{
    products.push(data);
  }

  addProduct({
    title:"pro1",
    createdAt:new Date(1993,1,1),
    stock:12
  });
  console.log(products);

  addProduct({
    title:"pro1",
    createdAt:new Date(1993,1,1),
    stock:12,
    size:"XL"
  });
  console.log(products);
})();
