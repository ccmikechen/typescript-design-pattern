import {
  Weapon,
  Sword,
  Knife,
  FireWeaponDecorator,
  IceWeaponDecorator
} from './weaponDecorator';

const normalSword: Weapon = new Sword();
const fireSword: Weapon = new FireWeaponDecorator(normalSword);
const iceSword: Weapon = new IceWeaponDecorator(normalSword);

console.log(normalSword.toString()); // normal sword
console.log(fireSword.toString()); // fire sword
console.log(iceSword.toString()); // ice sword

const normalKnife: Weapon = new Knife();
const fireKnife: Weapon = new FireWeaponDecorator(normalKnife);

console.log(normalKnife.toString()); // normal knife
console.log(fireKnife.toString()); // fire knife
