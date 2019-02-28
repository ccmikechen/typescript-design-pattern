export abstract class Weapon {
  weaponType: string;
  length: number;
  quality: string;

  constructor(weaponType: string, length: number, quality: string) {
    this.weaponType = weaponType;
    this.length = length;
    this.quality = quality;
  }

  getInfo(): string {
    return `Type: ${this.weaponType} - ${this.length} cm - ${this.quality} quality`;
  }
}

class Sword extends Weapon {
  constructor(length: number, quality: string) {
    super("Sword", length, quality);
  }
}

class Knife extends Weapon {
  constructor(length: number, quality: string) {
    super("Knife", length, quality);
  }
}

export interface WeaponFactory {
  createLongSword(): Sword;

  createShortSword(): Sword;

  createKnife(): Knife;
}

export class GoodWeaponFactory implements WeaponFactory {
  createLongSword(): Sword {
    return new Sword(150, "good");
  }

  createShortSword(): Sword {
    return new Sword(100, "good");
  }

  createKnife(): Knife {
    return new Knife(50, "good");
  }
}

export class BadWeaponFactory implements WeaponFactory {
  createLongSword(): Sword {
    return new Sword(150, "bad");
  }

  createShortSword(): Sword {
    return new Sword(100, "bad");
  }

  createKnife(): Knife {
    return new Knife(50, "bad");
  }
}
