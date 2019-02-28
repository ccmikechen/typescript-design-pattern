import {
  Weapon,
  WeaponFactory,
  GoodWeaponFactory,
  BadWeaponFactory
} from './weaponFactory';

const goodFactory: WeaponFactory = new GoodWeaponFactory();
const badFactory: WeaponFactory = new BadWeaponFactory();

const goodLongSword: Weapon = goodFactory.createLongSword();
const goodShortSword: Weapon = goodFactory.createShortSword();
const goodKnife: Weapon = goodFactory.createKnife();

console.log(goodLongSword.getInfo());
console.log(goodShortSword.getInfo());
console.log(goodKnife.getInfo());

const badLongSword: Weapon = badFactory.createLongSword();
const badShortSword: Weapon = badFactory.createShortSword();
const badKnife: Weapon = badFactory.createKnife();

console.log(badLongSword.getInfo());
console.log(badShortSword.getInfo());
console.log(badKnife.getInfo());
