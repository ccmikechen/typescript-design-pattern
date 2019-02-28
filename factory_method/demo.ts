import { Weapon, WeaponFactory } from './weaponFactory';

const factory: WeaponFactory = new WeaponFactory();
const longSword: Weapon = factory.createLongSword();
const shortSword: Weapon = factory.createShortSword();
const knife: Weapon = factory.createKnife();

console.log(longSword.getInfo());
console.log(shortSword.getInfo());
console.log(knife.getInfo());
