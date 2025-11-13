import _ from 'lodash';




(()=>{
  const data = [
  {
    username: 'Janer',
    role: 'CEO'
  },
  {
    username: 'Andres',
    role: 'CTO'
  },
  {
    username: 'Sabastian',
    role: 'seller'
  },
  {
    username: 'Zulma',
    role: 'seller'
  },
   {
    username: 'Paty',
    role: 'custumer'
  },
  {
    username: 'Zulema',
    role: 'Financial'
  }

];
   console.log(_.groupBy(data, (item)=> item.role ));
})();



