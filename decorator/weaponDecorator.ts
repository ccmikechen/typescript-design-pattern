export abstract class Weapon {
  abstract getType(): string;

  getProperty(): string {
    return "normal";
  }

  toString(): string {
    return `${this.getProperty()} ${this.getType()}`;
  }
}

export class Sword extends Weapon {
  getType(): string {
    return "sword";
  }
}

export class Knife extends Weapon {
  getType(): string {
    return "knife";
  }
}

abstract class WeaponDecorator extends Weapon {
  weapon: Weapon;

  constructor(weapon: Weapon) {
    super();
    this.weapon = weapon;
  }

  getType(): string {
    return this.weapon.getType();
  }

  getProperty(): string {
    return this.weapon.getProperty();
  }
}

export class FireWeaponDecorator extends WeaponDecorator {
  getProperty(): string {
    return "fire";
  }
}

export class IceWeaponDecorator extends WeaponDecorator {
  getProperty(): string {
    return "ice";
  }
}
