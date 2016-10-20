// - the * means import everything from this directory
import * as myName from './module-a';
// - here we only import what we need from this directory
import {add, pi, subtract} from './module-a';


export function add (a, b) {
return a + b;
}

export const pi = 3.1415926;

export function subtract (a, b) {
return a - b;
}
