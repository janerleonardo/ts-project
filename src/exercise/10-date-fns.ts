import {subDays, format} from 'date-fns';

const _date =  new Date();
const rta = subDays(_date, 30);
console.log(rta);
console.log(format(rta,"yyyy/MM/dd"));
