import {addProduct, calcStock, products} from './product.service.js';

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
  console.log(calcStock());
