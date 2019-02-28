export abstract class Weapon {
  weaponType: string;
  length: number;

  constructor(weaponType: string, length: number) {
    this.weaponType = weaponType;
    this.length = length;
  }

  getInfo(): string {
    return `Type: ${this.weaponType} - ${this.length} cm`;
  }
}

class Sword extends Weapon {
  constructor(length: number) {
    super("Sword", length);
  }
}

class Knife extends Weapon {
  constructor(length: number) {
    super("Knife", length);
  }
}

export class WeaponFactory {
  createLongSword(): Sword {
    return new Sword(150);
  }

  createShortSword(): Sword {
    return new Sword(100);
  }

  createKnife(): Knife {
    return new Knife(50);
  }
}
