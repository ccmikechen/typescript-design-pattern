import { Sun } from './sun';

const sun1 = Sun.getInstance();
const sun2 = Sun.getInstance();

console.log(sun1 == sun2 ? "Same" : "Not the same");
