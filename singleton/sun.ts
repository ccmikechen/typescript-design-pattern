export class Sun {
  private static instance: Sun;
  
  private constructor() {
  }

  public static getInstance(): Sun {
    if (!Sun.instance) {
      Sun.instance = new Sun();
    }
    return Sun.instance;
  }
}
