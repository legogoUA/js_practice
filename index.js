// import { name } from './module';
import './style.css';
// import isEmail from 'validator/lib/isEmail';
// import isURL from 'validator/lib/isURL';
// import toDate from 'validator/lib/toDate';


// console.log("Your name: " + name);

// console.log(isEmail("foo@bar.com"));
// console.log(isURL("https://www.npmjs.com/package/validator"));
// console.log(toDate("12.12.2000"));

var moment = require("moment");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format("MMM Do YY"));
console.log(moment().calendar());
console.log(moment().format('llll'));

console.log(`Hello world: ${moment().format("MMM Do YY")}`)
